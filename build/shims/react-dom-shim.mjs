// Import ReactDOM namespace — explicit named exports avoid the CJS→ESM interop
// issue where `export * from 'react-dom'` silently drops named exports when
// this file is served outside node_modules (via /@fs/).
import * as ReactDOMNS from 'react-dom';

export const createPortal = ReactDOMNS.createPortal;
export const createRoot = ReactDOMNS.createRoot;
export const findDOMNode = ReactDOMNS.findDOMNode;
export const flushSync = ReactDOMNS.flushSync;
export const hydrate = ReactDOMNS.hydrate;
export const hydrateRoot = ReactDOMNS.hydrateRoot;
export const render = ReactDOMNS.render;
export const unmountComponentAtNode = ReactDOMNS.unmountComponentAtNode;
export const unstable_batchedUpdates = ReactDOMNS.unstable_batchedUpdates;
export const version = ReactDOMNS.version;

export default ReactDOMNS;
