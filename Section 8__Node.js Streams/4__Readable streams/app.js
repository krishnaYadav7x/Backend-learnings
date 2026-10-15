// import fs from 'fs/promises'
import fs from 'fs'

// const buff1 = await fs.readFile(
//   "C:\\Users\\kris9\\Downloads\\Paaji-is-Live-SnapYT.App.webm",
// );
// fs.writeFile('man.mp4',buff1)

// const buff2 = await fs.readFile(
//   "C:\\Users\\kris9\\Downloads\\Computer-Network-for-SnapYT.App.webm",
// );
// fs.writeFile('hit.mp4',buff2)
console.time();
const readStream = fs.createReadStream(
  "C:\\Users\\kris9\\Downloads\\Computer-Network-for-SnapYT.App.webm",
  { highWaterMark: 100 * 1024 * 1024 },
  
);
let time = 0 
readStream.on('data',(chunk)=>{
 
  fs.appendFileSync('hit.mp4',chunk)
  // console.log(chunk.byteLength)
  time++
})

readStream.on('end',(chunk)=>{
 
  console.timeEnd()
  console.log(time);
})








// console.log(readStream);
// console.log('end');