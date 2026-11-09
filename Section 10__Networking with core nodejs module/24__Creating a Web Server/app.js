import { createReadStream, WriteStream } from "fs";
import { readFile } from "fs/promises";
import http from "http";

const server = http.createServer(async (req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    const readStream = createReadStream("./index.html");
    readStream.pipe(res);
  } else {
    const readStream = createReadStream(`./public${req.url}`);
    readStream.pipe(res);
  }
});

server.listen(1000, `10.253.238.185`, () => {
  console.log("server start");
});
