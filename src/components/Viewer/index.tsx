import React from "react";
import {
  type ViewerConfigOptions,
  useViewerDispatch,
  useViewerState,
  useViewer,
  CustomDisplay,
  PluginConfig,
} from "src/context/viewer-context";

import ViewerRoot, { type ViewerRootProps } from "src/components/Viewer/Root";
import ViewerLayout from "src/components/Viewer/Viewer/Viewer";
import ViewerHeader from "src/components/Viewer/Viewer/Header";
import ViewerContent from "src/components/Viewer/Viewer/Content";
import Painting from "src/components/Viewer/Painting/Painting";
import InformationPanel from "src/components/Viewer/InformationPanel/InformationPanel";
import Media from "src/components/Viewer/Media/Media";
import Collection from "src/components/Viewer/Collection/Collection";
import CanvasManager from "src/components/Viewer/CanvasManager";
import { ContentSearchQuery } from "src/types/annotations";
import { createTheme } from "@stitches/react";

export interface CloverViewerProps {
  canvasIdCallback?: (arg0: string) => void;
  contentStateCallback?: (iiifContentState: object) => void;
  customDisplays?: Array<CustomDisplay>;
  plugins?: Array<PluginConfig>;
  customTheme?: any;
  iiifContent: string | object;
  id?: string;
  manifestId?: string;
  options?: ViewerConfigOptions;
  iiifContentSearchQuery?: ContentSearchQuery;
}

/**
 * The default composed viewer — API-identical to the previous CloverViewer.
 * Internally uses Viewer.Root + the default layout.
 */
const CloverViewer: React.FC<CloverViewerProps> = ({
  canvasIdCallback,
  contentStateCallback,
  customDisplays = [],
  plugins = [],
  customTheme,
  iiifContent,
  id,
  manifestId,
  options,
  iiifContentSearchQuery,
}) => {
  /**
   * Legacy `id` and `manifestId` prop support.
   */
  let iiifResource = iiifContent;
  if (id) iiifResource = id;
  if (manifestId) iiifResource = manifestId;

  let theme = {};
  if (customTheme) theme = createTheme("custom", customTheme);

  return (
    <ViewerRoot
      iiifContent={iiifResource}
      canvasIdCallback={canvasIdCallback}
      contentStateCallback={contentStateCallback}
      customDisplays={customDisplays}
      plugins={plugins}
      options={options}
      iiifContentSearchQuery={iiifContentSearchQuery}
    >
      <ViewerLayout theme={theme} />
    </ViewerRoot>
  );
};

/**
 * Compound viewer namespace.
 *
 * @example
 * // Composed (backwards-compatible default):
 * <Viewer iiifContent="https://..." />
 *
 * @example
 * // Compound (custom layout):
 * <Viewer.Root iiifContent="https://...">
 *   <Viewer.Header />
 *   <Viewer.Painting />
 *   <Viewer.Navigator />
 *   <Viewer.InformationPanel />
 * </Viewer.Root>
 */
const Viewer = Object.assign(CloverViewer, {
  Root: ViewerRoot,
  Layout: ViewerLayout,
  Header: ViewerHeader,
  Content: ViewerContent,
  Painting,
  InformationPanel,
  Navigator: Media,
  Collection,
  CanvasManager,
});

export {
  useViewer,
  useViewerState,
  useViewerDispatch,
  type ViewerRootProps,
};

export default Viewer;
