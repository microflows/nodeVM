
<div align="center">
<img src="https://raw.githubusercontent.com/Paciolan/remote-module-loader/master/media/logo-small.png"/>
<h1>nodeVM</h1>

<a href="https://img.shields.io/badge/coverage-100%25-brightgreen.svg"><img src="https://img.shields.io/badge/coverage-100%25-brightgreen.svg"/></a>
<a href="https://github.com/microflows/nodeVM/blob/master/LICENSE.txt"><img src="https://img.shields.io/github/license/microflows/nodeVM?color=379c9c&style=flat-square"/></a>
<a href="https://github.com/microflows/nodeVM/stargazers"><img src="https://img.shields.io/github/stars/microflows/nodeVM?color=379c9c&style=flat-square"/></a>
<a href="https://discord.com/invite/wGSABhbCzN"><img src="https://img.shields.io/discord/813599680713457665?label=chat&logo=discord&color=379c9c&style=flat-square"/></a>

</div>


 - Dynamically load and run JS module from a remote URL for the Browser or Node.js.
 - Lazy Load Modules to keep initial load times down and load modules just in time, similar to Webpack's code splitting.
 - Update Remote Modules independent of the web application. Update a module without redeploying the web application.
 - As fast as your native code.

## Install

```bash
npm install @microflows/nodevm
```

## Getting start

### Simple Example

If your module has no external dependencies, this is the easiest method to fetch the remote module.

```javascript
/**
 * src/lib/loadRemoteModule.js
 */

import createLoadRemoteModule from "@microflows/nodevm";

export default createLoadRemoteModule();
```

### Require Example

You can pass dependencies to the module. All modules loaded with this version of `loadRemoteModule`, will have the dependencies available to `require`.

```javascript
/**
 * src/lib/loadRemoteModule.js
 */

import createLoadRemoteModule, {
  createRequires
} from "@microflows/nodevm";

const dependencies = {
  react: require("react")
};

const requires = createRequires(dependencies);
export default createLoadRemoteModule({ requires });
```

### Using your own fetcher

The default loader can be overridden if you want to use an alternate method.

This example uses `axios` for the fetcher.

```javascript
/**
 * src/lib/loadRemoteModule.js
 */

import createLoadRemoteModule from "@microflows/nodevm";
import axios from "axios";

const fetcher = url => axios.get(url).then(request => request.data);

export default createLoadRemoteModule({ fetcher });
```

### Add runtime attachment

```javascript
/**
 * src/lib/loadRemoteModule.js
 */

import createLoadRemoteModule from "@microflows/nodevm";

const const runtime = ["const __dirname = '/home'"]

export default createLoadRemoteModule({ runtime });
```

## How to make remote module or scripts?

--> https://github.com/microflows/mfNode


## Advance

Modules are loaded asynchronously, so use similar techniques to any other async function.

### Promise Style

```javascript
/**
 * src/index.js
 */

import loadRemoteModule from "./lib/loadRemoteModule";

const myModule = loadRemoteModule("http://fake.url/modules/my-module.js");

myModule.then(m => {
  const value = m.default();
  console.log({ value });
});
```

### Async/Await Style

```javascript
/**
 * src/index.js
 */

import loadRemoteModule from "./lib/loadRemoteModule";

const main = async () => {
  const myModule = await loadRemoteModule(
    "http://fake.url/modules/my-module.js"
  );
  const value = myModule.default();
  console.log({ value });
};

main();
```


### Content Security Policy (CSP)

Sites with a `content_security_policy` header set are likely to not work. CSP puts a restriction on using `new Function`, which `remote-module-loader` relies upon.

[Read more on CSP](https://developer.chrome.com/extensions/contentSecurityPolicy)


## Contributors

Joel Thoms (https://twitter.com/joelnet)

Xia fan (https://github.com/sovlookup)

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](www.flaticon.com)
