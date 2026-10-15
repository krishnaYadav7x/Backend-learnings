import fs from 'fs'
const readStream = fs.createReadStream('chars.txt',{highWaterMark:4})

// readStream.on('data',(chunk)=>{
//   fs.appendFileSync('newChars.txt',chunk)
  // readStream.pause()

  // console.log(readStream.isPaused());
  //   console.log(readStream.readableFlowing);
  //   console.log(readStream.readableEnded);
// })
// readStream.on('end',()=>{
//     console.log(readStream.readableFlowing);
//     console.log(readStream.readableEnded);
//      console.log(readStream.isPaused());
// })

// readStream.on('pause',()=>{
//   console.log(readStream.isPaused());
// })


readStream.on("data", (chunk) => {
  fs.appendFileSync("newChars.txt", chunk);
  readStream.pause()
  setInterval(()=>{
    readStream.resume()
  },500)
});







