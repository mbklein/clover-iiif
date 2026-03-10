import { render, screen } from "@testing-library/react";

import InformationPanel from "src/components/Viewer/InformationPanel/InformationPanel";
import React from "react";
import { Vault } from "@iiif/helpers/vault";

const mockDispatch = vi.fn();

vi.mock("src/components/Viewer/InformationPanel/About/About", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-about">About</div>,
}));

vi.mock("src/context/viewer-context", () => ({
  useViewerDispatch: () => mockDispatch,
  useViewerState: () => ({
    activeCanvas: "foobar",
    annotationResources: [],
    contentSearchResource: undefined,
    informationPanelResource: {},
    isAutoScrolling: false,
    isUserScrolling: false,
    searchServiceUrl: undefined,
    vault: new Vault(),
    configOptions: {
      informationPanel: {
        enabled: true,
      },
    },
    plugins: [],
  }),
}));

describe("InformationPanel", () => {
  test("renders an element with the 'clover-viewer-information-panel' class name", () => {
    render(<InformationPanel />);
    expect(screen.getByTestId("information-panel")).toHaveClass(
      "clover-viewer-information-panel",
    );
  });
});
