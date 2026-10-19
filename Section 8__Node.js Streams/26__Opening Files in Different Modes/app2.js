import fs from 'fs'
const buff = Buffer.from('krishna')
const fd = fs.openSync('a.txt','a')
fs.write(fd, buff,null,null,14, (err, writtenByte, buffer) => {
  console.log(err);
  console.log(writtenByte);
  console.log(buffer);
});