import fs from 'fs/promises'
const fileHandle = await fs.open('text.txt','w+')
// const {bytesRead,buffer} = await fileHandle.read({
//   buffer:Buffer.alloc(13)
// })
// console.log(bytesRead);
// console.log(buffer);
const b = await fileHandle.write(Buffer.from('handling files'))
console.log(b);