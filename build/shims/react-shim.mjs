// Import React namespace — Vite reliably converts CJS→ESM namespace imports
// even when this file is served outside node_modules (via /@fs/).
// Explicit named exports are required because `export * from 'react'` only
// works when Vite's CJS interop is active for the importer's location.
import * as ReactNS from 'react';

export const Children = ReactNS.Children;
export const Component = ReactNS.Component;
export const PureComponent = ReactNS.PureComponent;
export const Fragment = ReactNS.Fragment;
export const StrictMode = ReactNS.StrictMode;
export const Suspense = ReactNS.Suspense;
export const cloneElement = ReactNS.cloneElement;
export const createContext = ReactNS.createContext;
export const createElement = ReactNS.createElement;
export const createRef = ReactNS.createRef;
export const forwardRef = ReactNS.forwardRef;
export const isValidElement = ReactNS.isValidElement;
export const lazy = ReactNS.lazy;
export const memo = ReactNS.memo;
export const startTransition = ReactNS.startTransition;
export const useCallback = ReactNS.useCallback;
export const useContext = ReactNS.useContext;
export const useDebugValue = ReactNS.useDebugValue;
export const useDeferredValue = ReactNS.useDeferredValue;
export const useEffect = ReactNS.useEffect;
export const useId = ReactNS.useId;
export const useImperativeHandle = ReactNS.useImperativeHandle;
export const useInsertionEffect = ReactNS.useInsertionEffect;
export const useLayoutEffect = ReactNS.useLayoutEffect;
export const useMemo = ReactNS.useMemo;
export const useReducer = ReactNS.useReducer;
export const useRef = ReactNS.useRef;
export const useState = ReactNS.useState;
export const useSyncExternalStore = ReactNS.useSyncExternalStore;
export const useTransition = ReactNS.useTransition;
export const version = ReactNS.version;

// React 19 ESM doesn't provide a default export. Provide one that points to
// the namespace and also defines a minimal internal owner object so any
// legacy JSX runtimes that read it do not crash.
const defaultExport = { ...ReactNS };
defaultExport.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
  ReactCurrentOwner: { current: null },
};

export default defaultExport;
