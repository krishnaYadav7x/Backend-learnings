import fs from 'fs'
const writeStream = fs.createWriteStream('file.txt',{highWaterMark:4})

writeStream.write('a')
writeStream.write('a')
writeStream.write('a')
writeStream.write('a')

// writeStream.on('open',(fd)=>{
//   console.log('fd',fd);
// })

writeStream.end('c')
//writeStream.write('h')  //error
// writeStream.on('finish',()=>{
//   console.log('finished');
// })

writeStream.on('close',()=>{
  console.log('closed');
})
writeStream.on('finish',()=>{
  console.log('finished');
})




