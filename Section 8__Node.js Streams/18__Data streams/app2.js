//process.stdin is a Readable Stream that allows your Node.js program to read data from standard input.

import { createReadStream } from "node:fs";

const readStream = createReadStream(
  "C:\\Users\\kris9\\Downloads\\Computer-Network-for-SnapYT.App.webm",
);
readStream.pipe(process.stdout)
