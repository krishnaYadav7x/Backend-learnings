import { open, readdir, readFile } from "fs/promises";
import http from "http";
import { pipeline } from "stream/promises";

// Create HTTP Server
const server = http.createServer(async (req, res) => {
  console.log(req.url);

  // Read Root Storage Directory
  let filesList = "";
  const files = await readdir("./storage");
  console.log(files);

  // Generate File Links
  files.forEach((file) => {
    filesList += `<li><a href="./${file}">${file}</a></li>`;
  });

  // Serve Homepage
  if (req.url === "/") {
    const fileContent = await readFile("./index.html", "utf-8");
    res.end(fileContent.replace("${filesList}", filesList));
  }

  // Open Requested File or Directory
  const handleFile = await open(`./storage${req.url}`);
  const readStream = handleFile.createReadStream();
  const stats = await handleFile.stat();

  // Handle Directory Request
  if (stats.isDirectory()) {
    let filesList = "";
    const files = await readdir(`./storage${req.url}`);

    // Generate Links for Directory Contents
    files.forEach((file) => {
      console.log(file);
      filesList += `<li><a href="./${req.url}/${file}">${file}</a></li>`;
    });

    const fileContent = await readFile("./index.html", "utf-8");
    res.end(fileContent.replace("${filesList}", filesList));

  } else {
    // Stream Requested File
    try {
      readStream.pipe(res);
    } catch (err) {
      console.log(err);
    }
  }
});

// Start Server
server.listen(1000, "0.0.0.0");


