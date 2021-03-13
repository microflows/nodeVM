declare function require(name:string);

const os = require("os")

const __dirname: string = os.tmpdir();
const __filename: string = __dirname + "mfNode";

const runtimeAttachment: Array<string> = [
  `__dirname = "${__dirname}"`,
  `__filename = "${__filename}"`,
  "var require = require('require')",
]

const runtime: string = "\n" + runtimeAttachment.join("\n") + "\n"


export default runtime