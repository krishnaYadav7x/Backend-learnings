import fs from 'fs/promises'
// const fileHandle = await fs.open('file.txt')
// const readStream = fileHandle.createReadStream()
// readStream.setEncoding('utf-8')

// readStream.on('data',(chunk)=>{
//   console.log(chunk);
// })

const fileHandle = await fs.open(
  "C:\\Users\\kris9\\Downloads\\Computer-Network-for-SnapYT.App.webm",
);
const readStream = fileHandle.createReadStream({highWaterMark:1024*1024})
const fileHandle2 = await fs.open('m.mp4','w')
const writeStream = fileHandle2.createWriteStream({highWaterMark:1024*1024})

// readStream.on('data',(chunk)=>{
//   writeStream.write()
// })
readStream.pipe(writeStream)







