import {Buffer} from 'buffer'        


const a = new ArrayBuffer(4)

// const nodeBuffer = Buffer.alloc(4)

// const a = new ArrayBuffer(4)
// const nodeBuffer = Buffer.from(a)
// const uint8Array = new Uint8Array(a);

// uint8Array[0] = 97
// uint8Array[1] = 98
// uint8Array[2] = 99
// uint8Array[3] = 100

// console.log(uint8Array.toString());
// console.log(nodeBuffer.toString());
// console.log(nodeBuffer.buffer===uint8Array.buffer);
// console.log(nodeBuffer.buffer);

// console.log(nodeBuffer.buffer);
// console.log(uint8Array.buffer);

const nodeBuffer = Buffer.alloc(4)
const nodeBuffer2 = Buffer.from([97,98,99,100])


console.log(nodeBuffer.buffer.byteLength);
console.log(nodeBuffer2.buffer.byteLength);
console.log('end');













