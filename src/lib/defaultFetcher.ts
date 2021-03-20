import fetch from "cross-fetch";

export interface Fetcher {
  (url: string): Promise<string>;
}
const re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;

const urlValid = (url: string) => {
  if (typeof url !== "string") {
    throw new Error("URL must be a string.");
  }
  if (re.test(url) || url.indexOf("//") === 0) {
    throw new Error("URL is not valid.");
  }
  return url;
};

const defaultFetcher: Fetcher = url =>
  fetch(urlValid(url)).then(res => res.text());

export default defaultFetcher;

/**
 * Get's a url. Compatible with http and https.
 */
// const get: HttpGet = (url, ...args) => {
//   if (typeof url !== "string") {
//     return {
//       on(eventName, callback) {
//         callback(new Error("URL must be a string."));
//       }
//     } as http.ClientRequest;
//   }
//   return url.indexOf("https://") === 0
//     ? https.get(url, ...args)
//     : http.get(url, ...args);
// };

/**
 * Get's a URL and returns a Promise
 */
// const nodeFetcher: Fetcher = url =>
//   new Promise((resolve, reject) => {
//     get(url, res => {
//       let data = null;

//       // called when a data chunk is received.
//       res.on("data", chunk => {
//         if (data === null) {
//           data = chunk;
//           return;
//         }
//         data += chunk;
//       });

//       // called when the complete response is received.
//       res.on("end", () => resolve(data));
//     }).on("error", reject);
//   });
