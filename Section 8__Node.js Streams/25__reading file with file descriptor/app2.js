import fs from 'fs'
const buff = Buffer.alloc(24)
const fd = fs.openSync('text.txt')
fs.read(
  fd,
  {
    buffer: buff,
    position:5,     //where to start reading
    offset:2,
    length:10
  },
  (err, bytesRead, buff) => {
    console.log(err);
    console.log(bytesRead);
    console.log(buff);
    console.log(buff.toString());
  },
);