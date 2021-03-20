const __dirname: string = "";
const __filename: string = __dirname + "mfNode";

const runtimeAttachment: Array<string> = [
  `__dirname = "${__dirname}"`,
  `__filename = "${__filename}"`,
  "var require = require('require')"
];

const runtimeDefault: string = "\n" + runtimeAttachment.join("\n") + "\n";

export default function runtimeInit(runtime: Array<string>): string {
  runtime = runtime || [];
  return runtimeDefault + runtime.join("\n") + "\n";
}
