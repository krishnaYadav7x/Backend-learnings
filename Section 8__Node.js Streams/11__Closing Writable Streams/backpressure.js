import fs from 'fs'
const readStream = fs.createReadStream(
  "C:\\Users\\kris9\\Downloads\\Computer-Network-for-SnapYT.App.webm",{highWaterMark:1024*1024*1}
);
console.time()
// console.log(readStream.readableHighWaterMark);

const writeStream = fs.createWriteStream('b.mp4')
// console.log(writeStream.writableHighWaterMark);
readStream.on('data',(chunks)=>{
  // fs.appendFileSync('a.mp4',chunks)
  writeStream.write(chunks)
    console.log("Data queued:", writeStream.writableLength, "bytes");

})
readStream.on('end',()=>{
  console.timeEnd()
})