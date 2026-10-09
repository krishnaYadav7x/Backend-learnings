// const a = new ArrayBuffer(4)        //4 bytes means 32bits

// const uint8Array = new Uint8Array(a)
// const uint16Array = new Uint16Array(a)
// const uint32Array = new Uint32Array(a)

// uint8Array[2] = 0xf3
// uint16Array[0] = 0x34ea

// console.log(uint8Array);          //each element 8bits
// console.log(uint16Array);         //each element 16bits
// console.log(uint32Array);         //each element 32 bits
// console.log('end');



// const uint8Array = new Uint8Array(1.99*1024*1024*1024).fill(0xff)

//[0xfe, 0xee, 0x3a, 0x8a]

// setInterval(()=>{
//   new Uint8Array(1.99 * 1024 * 1024 * 1024).fill(0xff);
// },0)


// console.log(uint8Array.buffer);

const a = new ArrayBuffer(4,{maxByteLength:16})

// const b = a.transfer()
// console.log('end');


 const uint8Array = new Uint8Array(a)
uint8Array[0] = 0xfe
uint8Array[1] = 0xee



const b = a.transfer()
// console.log(a);
// console.log(b);
console.log('end');












