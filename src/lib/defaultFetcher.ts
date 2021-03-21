import fetch from "cross-fetch";
import { NotFoundError } from "./errors";

export interface Fetcher {
  (url: string): Promise<string>;
}

const defaultFetcher: Fetcher = url =>
  fetch(url).then(res => {
    if (res.status === 404) {
      throw new NotFoundError("Resource not found!");
    }
    return res.text();
  });

export default defaultFetcher;
