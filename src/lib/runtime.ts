const __dirname: string = "";
const __filename: string = __dirname + "mfNode";

const runtimeAttachment: string[] = [
  `__dirname = "${__dirname}"`,
  `__filename = "${__filename}"`
];

const runtimeDefault: string = "\n" + runtimeAttachment.join("\n") + "\n";

export default function runtimeInit(runtime: string[]): string {
  runtime = runtime || [];
  return runtimeDefault + runtime.join("\n") + "\n";
}
