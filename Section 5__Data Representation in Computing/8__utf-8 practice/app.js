// console.log(0b00101011)
// console.log(2**16);

import {readFile} from 'node:fs/promises'

const contentBuffer = await readFile('./text.md')
contentBuffer.forEach((el)=>{
  console.log(el.toString(2));
})