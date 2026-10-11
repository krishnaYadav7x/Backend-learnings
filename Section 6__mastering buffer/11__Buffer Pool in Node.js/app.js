import {Buffer,constants} from 'buffer'
console.log(constants);

// 📌 What is a Buffer Pool in Node.js?

// A Buffer pool is a pre-allocated block of memory that Node.js uses to allocate small Buffers efficiently by sharing the existing memory instead of allocating a separate memory block for every Buffer.


const a = Buffer.alloc(4)
const z = Buffer.alloc(4)

// Buffer.concat([a, z]) can use the Buffer pool for its resulting Buffer if the total size is less than half of Buffer.poolSize.

const joinedBuffer = Buffer.concat([a,z])

// const b = Buffer.allocUnsafe(8)

// Definition: Node.js uses the internal Buffer pool for Buffer.allocUnsafe(size) when the requested size is less than half of Buffer.poolSize.
// If Buffer.poolSize is 8192:

// Divide by 2 → 4096
// Apply floor → 4096

const b = Buffer.allocUnsafe(32767);
const c = Buffer.allocUnsafe(32767);
const d =  Buffer.from('abcdef')
b[2] = 97
c[0] = 9
console.log(d.buffer===c.buffer);
console.log(a.byteLength);
console.log(b.byteLength);
console.log('***********');
console.log(a.buffer.byteLength);
console.log(b.buffer.byteLength);

// console.log(Buffer.poolSize);