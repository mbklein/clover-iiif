import { ExternalResourceTypes } from "@iiif/presentation-3";
import { getVisibleCanvasesFromCanvasId } from "@iiif/helpers";
import React, { useEffect, useRef } from "react";
import { useViewerDispatch, useViewerState } from "src/context/viewer-context";
import {
  getAnnotationResources,
  getContentSearchResources,
  getPaintingResource,
} from "src/hooks/use-iiif";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { media } from "src/styles/stitches.config";
import { ContentSearchQuery } from "src/types/annotations";

export interface CanvasManagerProps {
  iiifContentSearchQuery?: ContentSearchQuery;
}

/**
 * Headless component that keeps derived canvas state in sync with
 * ViewerContext. Renders null. Must be mounted inside a ViewerProvider.
 */
const CanvasManager: React.FC<CanvasManagerProps> = ({
  iiifContentSearchQuery,
}) => {
  const dispatch: any = useViewerDispatch();
  const {
    activeCanvas,
    activeManifest,
    configOptions,
    manifest,
    searchServiceUrl,
    vault,
    visibleCanvases,
  } = useViewerState();

  const isSmallViewport = useMediaQuery(media.sm);

  // Generation counter to discard stale async annotation results
  const annotationGenRef = useRef(0);

  /**
   * Reset activeSelector when canvas or manifest changes.
   */
  useEffect(() => {
    dispatch({
      type: "updateActiveSelector",
      selector: undefined,
    });
  }, [activeCanvas, activeManifest]);

  /**
   * Derive painting resources and isAudioVideo from the active canvas,
   * and compute visible canvases for paged display.
   * Re-runs on viewport change so paged layout adapts correctly.
   */
  useEffect(() => {
    if (!activeCanvas) return;

    const canvasPainting = getPaintingResource(vault, activeCanvas);
    if (canvasPainting) {
      const isAudioVideo =
        (["Sound", "Video"] as ExternalResourceTypes[]).includes(
          canvasPainting[0].type as ExternalResourceTypes,
        );
      dispatch({
        type: "updatePaintingResources",
        paintingResources: canvasPainting,
        isAudioVideo,
      });
    }

    if (manifest) {
      // @ts-ignore — manifest typing mismatch across @iiif helper versions
      const visible = getVisibleCanvasesFromCanvasId(vault, manifest, activeCanvas);
      dispatch({
        type: "updateVisibleCanvases",
        visibleCanvases: visible,
      });
    }
  }, [activeCanvas, isSmallViewport, manifest, vault]);

  /**
   * Load annotation resources for all visible canvases.
   * Generation counter guards against out-of-order async results.
   */
  useEffect(() => {
    const generation = ++annotationGenRef.current;

    (async () => {
      const results = await Promise.all(
        visibleCanvases.map((canvas) =>
          getAnnotationResources(vault, canvas.id),
        ),
      );
      if (generation !== annotationGenRef.current) return;
      dispatch({
        type: "updateAnnotationResources",
        annotationResources: results.flat(),
      });
    })();
  }, [visibleCanvases]);

  /**
   * Extract the content search service URL from the manifest when it loads.
   */
  useEffect(() => {
    if (!manifest) return;

    const searchService = (manifest.service as any[]).find((service: any) =>
      ["SearchService1", "SearchService2"].includes(
        service.type || service["@type"],
      ),
    );
    dispatch({
      type: "updateSearchServiceUrl",
      searchServiceUrl: searchService
        ? searchService.id || searchService["@id"]
        : undefined,
    });
  }, [manifest]);

  /**
   * Fetch initial content search results when a query is provided
   * via the iiifContentSearchQuery prop.
   */
  useEffect(() => {
    if (!searchServiceUrl) return;
    if (configOptions.informationPanel?.renderContentSearch === false) return;

    getContentSearchResources(
      vault,
      searchServiceUrl,
      iiifContentSearchQuery,
    ).then((contentSearch) => {
      dispatch({
        type: "updateContentSearchResource",
        contentSearchResource: contentSearch,
      });
    });
  }, [searchServiceUrl]);

  return null;
};

export default CanvasManager;
