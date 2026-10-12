import {Buffer,constants} from 'buffer'
import fs from 'fs/promises'

// // const nodeBuffer = Buffer.alloc('hello world')
// const nodeBuffer = Buffer.from('abc')
// // const nodeBuffer3 = Buffer.from('abc')

// const nodeBuffer2 = Buffer.alloc(8)
// nodeBuffer2[0] = 45
// nodeBuffer2[1] = 98
// nodeBuffer2[7] = 99
// console.log(nodeBuffer2);
// console.log(nodeBuffer2.toString());
// fs.writeFile('text.txt',nodeBuffer)

// console.log(nodeBuffer.toString('hex'))


const buff1 = Buffer.alloc(8)
buff1.write('ab')

// console.log(buff1);
// console.log(buff1.toString());
// console.log(buff1.toJSON());

const buff2 = Buffer.from('hello world')
// console.log(buff2.slice(3,7).toString());
// console.log(buff2.subarray(5).toString());

// console.log(buff2.includes(97));
// console.log(buff2.includes('he',0));

const buff3 = Buffer.from('abcdef')

console.log(buff3);
console.log(buff3.readInt8(5));
console.log(buff3.readInt16LE(0));

















