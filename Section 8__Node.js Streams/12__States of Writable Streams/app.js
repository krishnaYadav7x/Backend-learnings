import fs from 'fs'

const writeStream = fs.createWriteStream('file.txt',{highWaterMark:4})

// console.log(writeStream.writable);
// writeStream.write('k')
// writeStream.end()
// console.log(writeStream.writable);
// writeStream.cork()
writeStream.write('a')
writeStream.write('b')
writeStream.write('c')
writeStream.write('d')
// writeStream.uncork()
// console.log(writeStream.writableCorked);
writeStream.end()
console.log(writeStream.writableEnded);
console.log(writeStream.writableLength);
// console.log(writeStream.writableFinished);
setTimeout(()=>{
  console.log(writeStream.writableFinished);
  console.log(writeStream.writableLength);
},10)
