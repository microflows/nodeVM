import memoize from "./memoize";
import runtimeInit from "./runtime";
import createRequires from "./createRequires";
import defaultFetcher, { Fetcher } from "./defaultFetcher";
import defaultValidator, { Validator } from "./defaultValidator";

export const createLoadRemoteModule = (
  dependencies?: object,
  runtime?: string[],
  fetcher?: Fetcher,
  validator?: Validator
) => {
  const _requires = createRequires(dependencies);
  const _runtime = runtimeInit(runtime);
  const _fetcher = fetcher || defaultFetcher;
  const _validator = validator || defaultValidator;

  return memoize(async (url: string) => {
    url = _validator(url);
    const data = await _fetcher(url);
    const exports = {};
    const module = { exports };
    const func = new Function("require", "module", "exports", _runtime + data);
    func(_requires, module, exports);
    return module.exports;
  });
};
