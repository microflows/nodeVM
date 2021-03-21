import { createLoadRemoteModule } from "./lib/loadRemoteModule";
import { Fetcher } from "./lib/defaultFetcher";
import { Validator } from "./lib/defaultValidator";

export default function vm(
  url: string,
  fetcher?: Fetcher,
  dependencies?: object,
  runtime?: string[]
) {
  const loadRemoteModule = createLoadRemoteModule(
    dependencies,
    runtime,
    fetcher
  );
  return loadRemoteModule(url);
}

export function newVM(
  dependencies?: object,
  runtime?: string[],
  fetcher?: Fetcher,
  validator?: Validator
) {
  return createLoadRemoteModule(dependencies, runtime, fetcher, validator);
}
