export interface Validator {
  (url: string): string;
}

const re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;

// valid url
const defaultValidator: Validator = url => {
  if (typeof url !== "string") {
    throw new TypeError("URL must be a string.");
  }
  if (!(re.test(url) || url.indexOf("//") === 0)) {
    url = "https://cdn.jsdelivr.net/npm/" + url;
  }
  return url;
};

export default defaultValidator;
