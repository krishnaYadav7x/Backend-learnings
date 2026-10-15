import fs from 'fs'

const readStream = fs.createReadStream('chars.txt',{highWaterMark:4})

let count = 0
readStream.on('data',(chunk)=>{
  count++
  if(count===1){

    fs.writeFileSync('charsAdd.txt',chunk)
  }else{
    fs.appendFileSync("charsAdd.txt", chunk);
    
  }
  readStream.pause()
  setTimeout(()=>{
    readStream.resume()
  },500)
    
})









// console.log('end');

// readStream.on("end", (chunk) => {
//   console.log(readStream.readableFlowing);
//   console.log(readStream.readableEnded);

//   console.log(readStream.isPaused());
// });