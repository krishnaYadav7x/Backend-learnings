import fs from 'fs'

const readStream = fs.createReadStream('chars.txt',{highWaterMark:4})

// readStream.on('data',(chunk)=>{
//   console.log(chunk);
// })

// console.log(readStream.read());

readStream.on('readable',()=>{
  console.log(readStream.readableLength);
  console.log(readStream.read(6))
  console.log(readStream.readableLength)
})