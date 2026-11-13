import { createWriteStream } from "fs";
import { open, readdir, readFile } from "fs/promises";
import http from "http";
import mime from "mime-types";
import { pipeline } from "stream/promises";
const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  console.log(req.headers);

  const fileName = req.url.split("/").pop();
  const [encodedUrl, query] = req.url.split("?");
const url = decodeURIComponent(encodedUrl)
  const contentType = mime.lookup(url);
  if (url.includes("/favicon.ico")) {
    res.end();
    return;
  }

  if (req.method === "GET") {
    if (url === "/") {
      await serveDirectory("./server/storage", res, "");
    } else {
      const handleFile = await open(
        `./server/storage${url}`,
      );
      const stats = await handleFile.stat();
      const readStream = handleFile.createReadStream();
      if (stats.isDirectory()) {
        await serveDirectory(`./server/storage${url}`, res, url);
        await handleFile.close();

        res.end("Cannot serve a directory");
        return;
      } else {
        //
        const queryObj = {};
        const [key, val] = query?.split("=");
        queryObj[key] = val;

        // console.log(queryObj)

        res.setHeader("Content-Type", contentType);
        res.setHeader("Content-Length", stats.size);
        if (queryObj["action"] === "download") {
          console.log(contentType.split("/"));
          res.setHeader(
            "Content-Disposition",
            `attachment; filename:"${fileName}"`,
          );
        }

        try {
          await pipeline(readStream, res);
        } catch (err) {
          console.log(err);
        } finally {
          await handleFile.close();
        }
      }
    }
  } else if (req.method === "OPTIONS") {
    res.end("OK");
    return;
  } else if (req.method === "POST") {
    console.log(req.url)
    const fileName = req.headers["filename"];
    const writeStream = createWriteStream(`./server/storage/${fileName}`);

    writeStream.on("end", () => {
      res.end("Data uploaded");
    });

    writeStream.on("error", (err) => {
      console.error(err);
      res.writeHead(500);
      res.end("Upload failed");
    });

    req.pipe(writeStream);
  }
});

async function serveDirectory(dir, res, href) {
  const dirItems = await readdir(dir);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(dirItems));
}

server.listen(1000, "0.0.0.0");
