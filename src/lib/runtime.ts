declare function require(name:string);
const os = require("os")

const __dirname: string = os.tmpdir();
const __filename: string = __dirname + "mfNode";

const runtimeAttachment: Array<string> = [
  `__dirname = "${__dirname}"`,
  `__filename = "${__filename}"`,
  "var require = require('require')",
]

const runtimeDefault: string = "\n" + runtimeAttachment.join("\n") + "\n"


export default function runtimeInit( runtime: Array<string> ): string {
  return runtimeDefault + runtime.join("\n") + "\n"
}
