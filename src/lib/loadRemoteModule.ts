import memoize from "./memoize";
import runtimeInit from "./runtime";
import createRequires from "./createRequires";
import defaultFetcher, { Fetcher } from "./defaultFetcher";

export const createLoadRemoteModule = (
  dependencies?: object,
  runtime?: string[],
  fetcher?: Fetcher
) => {
  const _requires = createRequires(dependencies);
  const _runtime = runtimeInit(runtime);
  const _fetcher = fetcher || defaultFetcher;

  return memoize((url: string) =>
    _fetcher(url).then(data => {
      const exports = {};
      const module = { exports };
      const func = new Function(
        "require",
        "module",
        "exports",
        _runtime + data
      );
      func(_requires, module, exports);
      return module.exports;
    })
  );
};
