import {
  Aside,
  Content,
  Main,
  MediaWrapper,
} from "src/components/Viewer/Viewer/Viewer.styled";

import InformationPanel from "src/components/Viewer/InformationPanel/InformationPanel";
import Media from "src/components/Viewer/Media/Media";
import Painting from "../Painting/Painting";
import React from "react";
import { useViewerState } from "src/context/viewer-context";

const ViewerContent: React.FC = () => {
  const {
    annotationResources,
    contentStateAnnotation,
    isInformationOpen,
    configOptions,
    sequence,
    visibleCanvases,
  } = useViewerState();
  const { informationPanel } = configOptions;

  /**
   * The information panel should be rendered if toggled true and if
   * there is content (About or Annotations Resources) to display.
   */
  const visibleCanvasesIds = visibleCanvases.map((canvas) => canvas.id);

  const hasAnnotations =
    annotationResources.length > 0 ||
    // @ts-ignore
    visibleCanvasesIds.includes(contentStateAnnotation?.target?.source?.id);

  // Only force the aside open for annotations when no toggle is rendered.
  // If a toggle is visible, it must control open/close behavior.
  const isForcedAside =
    hasAnnotations &&
    informationPanel?.renderAnnotation &&
    informationPanel?.renderToggle === false &&
    isInformationOpen;

  const isAside =
    (informationPanel?.renderAbout && isInformationOpen) || isForcedAside;

  const renderToggle = informationPanel?.renderToggle;

  return (
    <Content
      className="clover-viewer-content"
      data-testid="clover-viewer-content"
    >
      <Main data-aside-active={isAside} data-aside-toggle={renderToggle}>
        <Painting />

        {sequence[1].length > 1 && (
          <MediaWrapper className="clover-viewer-media-wrapper">
            <Media />
          </MediaWrapper>
        )}
      </Main>
      {isAside && (
        <Aside data-aside-active={isAside} data-aside-toggle={renderToggle}>
          <InformationPanel />
        </Aside>
      )}
    </Content>
  );
};

export default ViewerContent;
