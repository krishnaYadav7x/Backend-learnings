import http from "http";
import fs from 'fs/promises'

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Content-Disposition","attachment; filename=streams.mp4")
  const handleRead = await fs.open(
    "C:\\Users\\kris9\\Downloads\\Paaji-is-Live-SnapYT.App.webm",
  );
  const {size} = (await handleRead.stat())
  res.setHeader("Content-Length",size)
  const readStream = handleRead.createReadStream({highWaterMark:10*1024*1024})
  readStream.on('data',(chunk)=>{
    res.write(chunk)
    readStream.pause()
    setTimeout(()=>{
      readStream.resume()
    },500)
  })
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});
