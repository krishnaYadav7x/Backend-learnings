// const a  = new ArrayBuffer(8,{maxByteLength:16})

// const uint8Array = new Uint8Array(a)
// const uint16Array = new Uint16Array(a)
// uint8Array[0] = 45
// uint8Array[1] = 80
// console.log(uint8Array[0])
// console.log('buffer',uint8Array.buffer)
// console.log('bytelength',uint8Array.byteLength)
// console.log('byteoffset',uint8Array.byteOffset)
// console.log(uint8Array)
// console.log(uint16Array)

// const uint8Array = new Uint8Array(1.9*1024*1024*1024).fill(0x45)

// **** dataview and typedArray **** //

// const a = new ArrayBuffer(4,{maxByteLength:16})
// a.resize(16)
// const view = new DataView(a,1)
// view.setInt8(0,250)
// view.setInt8(1,250)
// view.setInt8(2,250)
// view.setInt8(3,250)
// view.setInt8(4,250)
// view.setInt16(5,875,true)

const uint8Array = new Uint8Array(8)

uint8Array[0] = 45
uint8Array[1] = 45
uint8Array[2] = 45
uint8Array[3] = 45
uint8Array[4] = 45
uint8Array[5] = 45
uint8Array[6] = 45
uint8Array[7] = 45
uint8Array[8] = 45




console.log("end");
