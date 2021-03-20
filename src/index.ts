import { createLoadRemoteModule } from "./lib/loadRemoteModule";
import { Fetcher } from "./lib/defaultFetcher";

export default async function vm(
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
  return await loadRemoteModule(url);
}
