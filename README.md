
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<div align="center">
<img src="https://raw.githubusercontent.com/Paciolan/remote-module-loader/master/media/logo-small.png"/>
<h1>Node Virtual Module</h1>

<a href="https://img.shields.io/badge/coverage-100%25-brightgreen.svg"><img src="https://img.shields.io/badge/coverage-100%25-brightgreen.svg"/></a>
<a href="https://github.com/microflows/nodeVM/blob/master/LICENSE.txt"><img src="https://img.shields.io/github/license/microflows/nodeVM?color=379c9c&style=flat-square"/></a>
<a href="https://github.com/microflows/nodeVM"><img src="https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square"/></a>
<a href="https://github.com/microflows/nodeVM/stargazers"><img src="https://img.shields.io/github/stars/microflows/nodeVM?color=379c9c&style=flat-square"/></a>
<a href="https://discord.com/invite/wGSABhbCzN"><img src="https://img.shields.io/discord/813599680713457665?label=chat&logo=discord&color=379c9c&style=flat-square"/></a>
<a href="https://packagephobia.now.sh/badge?p=@microflows/nodevm"><img src="https://packagephobia.now.sh/badge?p=@microflows/nodevm"/></a>
</div>
<!-- ALL-CONTRIBUTORS-BADGE:END -->

 - Dynamically load and run JS module from a remote URL for the Browser or Node.js.
 - Lazy Load Modules to keep initial load times down and load modules just in time, similar to Webpack's code splitting.
 - Update Remote Modules independent of the web application. Update a module without redeploying the web application.
 - A new method of SSR, server-side rendering js instead of html.
 - As fast as your native code.

## Install

```bash
npm install @microflows/nodevm
```

## Getting start
### Example
#### Async/Await Style

```javascript
import vm from "@microflows/nodevm";

async function main() {
  const newService = await vm("https://cdn.jsdelivr.net/gh/microflows/mfNode.js@publish/release/index.js");
  console.log(newService().name);
}

main();
```

#### Promise Style

```javascript
import vm from "@microflows/nodevm";

console.log(
  vm("https://cdn.jsdelivr.net/gh/microflows/mfNode.js@publish/release/index.js").then(
    newService => newService().name
  )
);
```

## Advance
### vm function arguments

| name         | type     | description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| url          | string   | remote module url                                            |
| fetcher      | Fetcher  | custom fetcher                                               |
| runtime      | string[] | code exec before remote module                               |
| dependencies | object   | custom dependencies (you donnot need this when using mfNode) |

### Using your own fetcher

The default loader can be overridden if you want to use an alternate method.

This example uses `axios` for the fetcher.

```javascript
import vm from "@microflows/nodevm";
import axios from "axios";

const fetcher = url => axios.get(url).then(request => request.data);

vm(url:"https://cdn.jsdelivr.net/gh/microflows/mfNode.js@publish/release/index.js",fetcher:fetcher)
```

### Add runtime attachment

```javascript
import vm from "@microflows/nodevm";

const const runtime = ["const __dirname = '/home'"]

vm(url:"https://cdn.jsdelivr.net/gh/microflows/mfNode.js@publish/release/index.js",runtime:runtime)
```

### Use require

```javascript
const vm = require('@microflows/nodevm').default;
console.log(
  vm("https://cdn.jsdelivr.net/gh/microflows/mfNode.js@publish/release/index.js").then(
    newService => newService().name
  )
);
```

### Content Security Policy (CSP)

Sites with a `content_security_policy` header set are likely to not work. CSP puts a restriction on using `new Function`, which `remote-module-loader` relies upon.

[Read more on CSP](https://developer.chrome.com/extensions/contentSecurityPolicy)

## License

Apache License, Version 2.0

Copyright [2021] [[microflow](https://github.com/microflows/)]

This project is based on [remote-module-loader](https://github.com/Paciolan/remote-module-loader)

## Contributors✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://joel.net"><img src="https://avatars.githubusercontent.com/u/742630?v=4?s=100" width="100px;" alt=""/><br /><sub><b>joelnet</b></sub></a><br /><a href="https://github.com/microflows/nodeVM/commits?author=joelnet" title="Code">💻</a></td>
   <td align="center"><a href="http://github.com/sovlookup"><img src="https://avatars.githubusercontent.com/u/53158137?v=4?s=100" width="100px;" alt=""/><br /><sub><b>SOVLOOKUP</b></sub></a><br /><a href="https://github.com/microflows/nodeVM/commits?author=sovlookup" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
