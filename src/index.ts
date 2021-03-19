import { createRequires } from "./lib/createRequires";
import { createLoadRemoteModule } from "./lib/loadRemoteModule";
import { Fetcher } from "./models";

export default async function vm(
  url: string,
  fetcher?: Fetcher,
  dependencies?: object,
  runtime?: string[]
): Promise<any> {
  dependencies = dependencies || {};
  const requires = createRequires(dependencies);
  const loadRemoteModule = createLoadRemoteModule({
    requires,
    fetcher,
    runtime
  });
  return loadRemoteModule(url);
}

export { createLoadRemoteModule } from "./lib/loadRemoteModule";
export { createRequires } from "./lib/createRequires";
