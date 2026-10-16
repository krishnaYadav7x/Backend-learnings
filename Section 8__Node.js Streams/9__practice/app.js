import fs from 'fs'

// const readStream = fs.createReadStream(
//   "C:\\Users\\kris9\\Downloads\\Computer-Network-for-SnapYT.App.webm",{highWaterMark:1024*1024*100}
// );

// readStream.on('data',(chunk)=>{
//   fs.appendFileSync('a.mp4',chunk)
//   // console.log(chunk.byteLength);
//   // console.log(chunk.toString('utf-8'));
//   // console.log('a');
// })
// console.log('a');
// readStream.on('end',()=>{
//   console.log('data finished');
// })

const readStream = fs.createReadStream('char.txt',{highWaterMark:6})

// readStream.on('ready',()=>{
//   console.log('ready');
// })
// readStream.on('open',()=>{
//   console.log('open');
// })
// readStream.on('end',()=>{
//   console.log('end');
// })
readStream.on('readable',()=>{
  console.log(readStream.readableLength);
  console.log(readStream.read(4));
  console.log(readStream.readableLength);
})


























