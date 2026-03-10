import {
  AnnotationNormalized,
  CollectionNormalized,
  ManifestNormalized,
} from "@iiif/presentation-3";
import React, { useEffect, useState } from "react";
import {
  ViewerProvider,
  defaultState,
  expandAutoScrollOptions,
  useViewerDispatch,
  useViewerState,
  type CustomDisplay,
  type PluginConfig,
  type ViewerConfigOptions,
} from "src/context/viewer-context";

import { encodeContentState, getManifestSequence } from "@iiif/helpers";
import { Vault } from "@iiif/helpers/vault";
import CanvasManager from "src/components/Viewer/CanvasManager";
import { ContentSearchQuery } from "src/types/annotations";
import { contentStateSpecificResource } from "src/lib/content-state";
import {
  decodeContentStateContainerURI,
  getActiveCanvas,
  getActiveManifestFromCollection,
  parseContentStateJson,
} from "src/lib/iiif";
import { getRequest } from "src/lib/xhr";
import { hashCode } from "src/lib/utils";

export interface ViewerRootProps {
  canvasIdCallback?: (arg0: string) => void;
  contentStateCallback?: (iiifContentState: object) => void;
  customDisplays?: Array<CustomDisplay>;
  plugins?: Array<PluginConfig>;
  iiifContent: string | object;
  options?: ViewerConfigOptions;
  iiifContentSearchQuery?: ContentSearchQuery;
  children: React.ReactNode;
}

/**
 * Viewer.Root — context provider + manifest loader for the compound viewer.
 *
 * Wraps children in a ViewerProvider, loads the IIIF resource, and mounts
 * CanvasManager. Children are not rendered until the manifest is confirmed
 * valid (isLoaded and manifest.items present).
 */
const ViewerRoot: React.FC<ViewerRootProps> = ({
  canvasIdCallback,
  contentStateCallback,
  customDisplays = [],
  plugins = [],
  iiifContent,
  options,
  iiifContentSearchQuery,
  children,
}) => {
  const autoScrollOptions = expandAutoScrollOptions(
    options?.informationPanel?.vtt?.autoScroll,
  );

  return (
    <ViewerProvider
      initialState={{
        ...defaultState,
        customDisplays,
        plugins,
        isAutoScrollEnabled: autoScrollOptions.enabled,
        isInformationOpen: Boolean(options?.informationPanel?.open),
        vault: new Vault({
          customFetcher: (url: string) =>
            getRequest(url, {
              withCredentials: options?.withCredentials as boolean,
              headers: options?.requestHeaders,
            }).then((response) => JSON.parse(response.data)),
        }),
      }}
    >
      <RootInner
        iiifContent={iiifContent}
        canvasIdCallback={canvasIdCallback}
        contentStateCallback={contentStateCallback}
        options={options}
        iiifContentSearchQuery={iiifContentSearchQuery}
      >
        {children}
      </RootInner>
    </ViewerProvider>
  );
};

type RootInnerProps = Omit<ViewerRootProps, "customDisplays" | "plugins">;

/**
 * Inner component — has access to ViewerProvider context.
 * Handles all manifest loading and dispatching, then renders children.
 */
const RootInner: React.FC<RootInnerProps> = ({
  canvasIdCallback,
  contentStateCallback,
  iiifContent,
  options,
  iiifContentSearchQuery,
  children,
}) => {
  const dispatch: any = useViewerDispatch();
  const {
    activeCanvas,
    activeManifest,
    activeSelector,
    isLoaded,
    vault,
    visibleCanvases,
  } = useViewerState();

  const [iiifResource, setIiifResource] = useState<
    CollectionNormalized | ManifestNormalized | AnnotationNormalized | undefined
  >();
  const [manifest, setManifest] = useState<ManifestNormalized>();

  /**
   * Pass activeCanvas up to the consuming application.
   * Build and emit content state when selector changes.
   */
  useEffect(() => {
    if (canvasIdCallback) {
      canvasIdCallback(activeCanvas);
    }

    if (contentStateCallback && activeManifest && activeCanvas) {
      const targetSourceId = visibleCanvases[0]?.id || activeCanvas;
      const annotationId = `${activeManifest}/state/${hashCode(targetSourceId + JSON.stringify(activeSelector))}`;

      const json = {
        ...contentStateSpecificResource,
        id: annotationId,
        target: {
          type: "SpecificResource",
          source: {
            id: targetSourceId,
            type: "Canvas",
            partOf: [{ id: activeManifest, type: "Manifest" }],
          },
          selector: activeSelector,
        },
      };
      contentStateCallback({
        json,
        encoded: encodeContentState(JSON.stringify(json)),
      });
    }
  }, [
    activeCanvas,
    activeManifest,
    activeSelector,
    canvasIdCallback,
    contentStateCallback,
    visibleCanvases,
  ]);

  /**
   * Load manifest data from vault once activeManifest is set.
   * Dispatches sequence, viewingDirection, isPaged, and manifest.
   */
  useEffect(() => {
    if (activeManifest)
      vault
        .load(activeManifest)
        .then((data: ManifestNormalized) => {
          if (!data) return;

          setManifest(data);
          dispatch({ type: "updateManifest", manifest: data });

          // @ts-ignore
          const sequence = getManifestSequence(vault, data);
          const canvasId = activeCanvas || getActiveCanvas(data);

          dispatch({ type: "updateActiveCanvas", canvasId });
          dispatch({ type: "updateManifestSequence", sequence });

          // @ts-ignore
          const viewingDirection = data.viewingDirection || "left-to-right";
          // @ts-ignore
          const behavior = data.behavior || [];
          const isPaged = Array.isArray(behavior)
            ? behavior.includes("paged")
            : behavior === "paged";

          dispatch({ type: "updateViewingDirection", viewingDirection });
          dispatch({ type: "updateIsPaged", isPaged });
        })
        .catch((error: Error) => {
          console.error(`Manifest failed to load: ${error}`);
        })
        .finally(() => {
          dispatch({ type: "updateIsLoaded", isLoaded: true });
        });
  }, [iiifContent, activeManifest, dispatch, vault]);

  /**
   * Decode and load the top-level IIIF resource (manifest, collection,
   * or content state annotation) from the iiifContent prop.
   */
  useEffect(() => {
    dispatch({ type: "updateConfigOptions", configOptions: options });

    const loadResource = async () => {
      if (!iiifContent) return;

      const contentState = decodeContentStateContainerURI(iiifContent);
      try {
        const data:
          | ManifestNormalized
          | CollectionNormalized
          | AnnotationNormalized
          | undefined =
          typeof contentState === "object" && contentState?.id
            ? await vault.loadSync(contentState?.id, contentState)
            : await vault.load(contentState);
        setIiifResource(data);
      } catch (error) {
        if (!contentState || !contentState.id)
          console.error(`Failed to load resource: ${error}`);

        if (
          contentState?.id &&
          contentState?.type === "Annotation" &&
          contentState?.motivation?.includes("contentState")
        ) {
          const data: AnnotationNormalized | undefined = await vault.loadSync(
            contentState.id,
            contentState,
          );
          if (data) setIiifResource(data);
        } else if (
          contentState?.id &&
          ["Canvas", "Manifest"].includes(contentState?.type)
        ) {
          const data = await vault.loadSync(contentState.id, contentState);
          if (data)
            setIiifResource({
              ...contentStateSpecificResource,
              target: contentState,
            });
        }
      }
    };

    loadResource();
  }, [dispatch, iiifContent, options, vault]);

  /**
   * Route the loaded resource to the correct dispatch actions.
   */
  useEffect(() => {
    if (!iiifResource) return;

    switch (iiifResource.type) {
      case "Annotation":
        if (
          iiifResource?.motivation &&
          (Array.isArray(iiifResource?.motivation)
            ? iiifResource?.motivation.includes("contentState")
            : iiifResource?.motivation === "content-state")
        ) {
          const { active } = parseContentStateJson(iiifResource);
          dispatch({ type: "updateActiveManifest", manifestId: active.manifest });
          dispatch({ type: "updateActiveCanvas", canvasId: active.canvas });
          dispatch({
            type: "updateContentStateAnnotation",
            contentStateAnnotation: iiifResource,
          });
        }
        break;
      case "Collection":
        const manifestId = getActiveManifestFromCollection(
          iiifResource as CollectionNormalized,
        );
        dispatch({ type: "updateCollection", collection: iiifResource });
        if (manifestId) {
          dispatch({ type: "updateActiveManifest", manifestId });
        }
        break;
      case "Manifest":
        dispatch({ type: "updateActiveManifest", manifestId: iiifResource.id });
        break;
    }
  }, [dispatch, iiifContent, iiifResource]);

  if (!isLoaded) {
    if (options?.customLoadingComponent) {
      const CustomLoadingComponent = options.customLoadingComponent;
      return <CustomLoadingComponent />;
    }
    return <>Loading</>;
  }

  if (!manifest || !manifest["items"]) {
    console.log(`The IIIF manifest ${iiifContent} failed to load.`);
    return <></>;
  }

  if (manifest["items"].length === 0) {
    console.log(`The IIIF manifest ${iiifContent} does not contain canvases.`);
    return <></>;
  }

  return (
    <>
      <CanvasManager iiifContentSearchQuery={iiifContentSearchQuery} />
      {children}
    </>
  );
};

export default ViewerRoot;
