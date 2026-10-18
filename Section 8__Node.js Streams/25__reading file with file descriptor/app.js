import fs from 'fs'
// const fd = fs.openSync('text.txt')
// fs.read(fd,(err,bytesRead,buffData)=>{
//   console.log(err);
//   console.log(bytesRead);
//   console.log(buffData.byteLength);
//   console.log(buffData.toString());
// })

const buffer = Buffer.alloc(150)

const fd2 = fs.openSync("notes.md")
fs.read(fd2,{
  buffer:buffer,
  position:5,
  offset:3,
  length:10
},(err,bytesRead,buffData)=>{
  console.log(bytesRead);
  console.log(buffData);
  console.log(buffData.toString());
})








