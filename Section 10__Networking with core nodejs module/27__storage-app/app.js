import { open, readdir, readFile } from "fs/promises";
import http from "http";
import mime from "mime-types";

const server = http.createServer(async (req, res) => {
  // UNNECESSARY BROWSER REQUESTS
  if (
    req.url.startsWith("/.well-known/") ||
    req.url === "/favicon.ico" ||
    req.url.startsWith("/sourceMap/")
  ) {
    return res.end();
  }

  // EXTRACT URL AND QUERY PARAMETERS
  const url = req.url;
  let [pathName, query] = url.split("?");
  console.log(pathName);

  // DETERMINE FILE MIME TYPE
  const contentType = mime.contentType(pathName.split("/").pop());

  //ROOT DIRECTORY
  if (pathName === "/") {
    await serveDirectory("./storage", `.`, res);
  } else {
    let handleFile;

    try {
      // OPEN FILE
      handleFile = await open(`./storage${decodeURIComponent(pathName)}`);
      const stats = await handleFile.stat();

      // HANDLE DIRECTORY REQUESTS
      if (stats.isDirectory()) {
        await serveDirectory(
          `./storage${decodeURIComponent(pathName)}`,
          `${pathName}`,
          res,
        );
        await handleFile.close();
      } else {
        // EXTRACT QUERY PARAMETERS
        let queryObj = {};
        query?.split("&").forEach((query) => {
          let [key, value] = query.split("=");
          queryObj[key] = value;
        });
        console.log(queryObj);

        // SET RESPONSE CONTENT TYPE
        res.setHeader("Content-Type", contentType);

        // SET DOWNLOAD HEADERS
        if (queryObj["action"] === "download") {
          res.setHeader(
            "Content-Disposition",
            `attachment; filename="${pathName}"`,
          );
          res.setHeader("Content-Length", stats.size);
        }

        // STREAM FILE TO BROWSER
        const readStream = handleFile.createReadStream({ autoClose: true });
        readStream.pipe(res);
      }
    } catch (err) {
      // HANDLE FILE NOT FOUND
      res.writeHead(404);
      res.end("File not found");
    }
  }
});

// DIRECTORY HTML
async function serveDirectory(dir, href, res) {
  const dirItems = await readdir(dir);

  let dirItemsHTML = "";

  dirItems.forEach((item) => {
    dirItemsHTML += `<li><span>${item}</span><br><a href="${href}/${encodeURIComponent(item)}?action=preview&name=abcd">Preview</a>&nbsp;<a href="${href}/${encodeURIComponent(item)}?action=download&name=abcd">Download</a></li><br>`;
  });

  const indexHTML = await readFile("./index.html", "utf-8");
  res.end(indexHTML.replace("${dirItemsHTML}", dirItemsHTML));
}

// START SERVER
server.listen(1000, "0.0.0.0", () => {
  console.log(`server started on port 1000\nhttp://localhost:1000`);
});
