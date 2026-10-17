import fs from "fs";
import { pipeline } from "stream";

const readStream = fs.createReadStream(
  "C:\\Users\\kris9\\Downloads\\Computer-Network-for-SnapYT.App.webm",{highWaterMark:1024*1024}
);

const writeStream = fs.createWriteStream("m.mp4", {
  highWaterMark: 1024 * 1024,
});
console.time("File copy");

// readStream.pipe(writeStream);
// readStream.on('error',(err)=>{
//   console.log(err);
// })

pipeline(readStream,writeStream,(err)=>{
  console.log(err);
})


setTimeout(()=>{
  readStream.destroy('destroyed')
},1000)

setInterval(()=>{
  console.log('hii');
},50)



writeStream.on("finish", () => {
  console.timeEnd("File copy");
});












