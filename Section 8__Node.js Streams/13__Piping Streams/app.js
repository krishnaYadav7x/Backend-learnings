import fs from "fs";

const readStream = fs.createReadStream(
  "C:\\Users\\kris9\\Downloads\\Computer-Network-for-SnapYT.App.webm",{highWaterMark:1024*1024}
);

const writeStream = fs.createWriteStream("m.mp4", {
  highWaterMark: 1024 * 1024,
});
console.time("File copy");

readStream.pipe(writeStream);

setTimeout(()=>{
  readStream.unpipe(writeStream);
},1000)

writeStream.on("finish", () => {
  console.timeEnd("File copy");
});

// console.time()
// readStream.on('data',(chunk)=>{
//   const isEmpty = writeStream.write(chunk)
//   if(!isEmpty){
//     readStream.pause()
//   }
// })



// writeStream.on('drain',()=>{
//   readStream.resume()
// });







