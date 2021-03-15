import memoize from "./memoize";
import xmlHttpRequestFetcher from "./xmlHttpRequestFetcher/index";
import nodeFetcher from "./nodeFetcher";
import runtimeInit from "./runtime"
import { createRequires } from "..";

const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

/* istanbul ignore next - difficult to test */
const defaultFetcher = isBrowser ? xmlHttpRequestFetcher : nodeFetcher;

interface CreateLoadRemoteModuleOptions {
  requires: any;
  fetcher: any;
}

interface LoadRemoteModule {
  (url: string): Promise<any>;
}

interface CreateLoadRemoteModule {
  (CreateLoadRemoteModuleOptions?): LoadRemoteModule;
}

export const createLoadRemoteModule: CreateLoadRemoteModule = ({
  requires,
  fetcher,
  runtime
} = {}) => {
  const _requires = requires || createRequires();
  const _fetcher = fetcher || defaultFetcher;
  const _runtime = runtimeInit(runtime)

  return memoize(url =>
    _fetcher(url).then(data => {
      const exports = {};
      const module = { exports };
      const func = new Function("require", "module", "exports", _runtime +  data);
      func(_requires, module, exports);
      return module.exports;
    })
  );
};
