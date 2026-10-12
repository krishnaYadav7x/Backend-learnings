// const a = new ArrayBuffer(8)
// const view = new DataView(a)
// view.setInt16(0,233)
// view.setInt8(1,78)
// view.setInt8(2,65)
// view.setInt8(3,34)

// view.setInt8(0,1)
// view.setInt8(0,-25)
// console.log(view.getInt8(0));
// console.log(view.getUint8(0));

// const uint8Array1 = new Uint8Array(a,1)
// const uint8Array2 = new Uint8Array(a)

// const uint8Array1 = new Uint8Array(8)
// const uint8Array2 = new Uint8Array(8)
// const uint8Array3 = new Uint8Array([0,1,2,3,5])
// const int16Array4 = new Int16Array([128,560])

// uint8Array1[1] = 97
// uint8Array2[2] = 98



//**** buffer in node js ****//

import {Buffer} from 'node:buffer';



// const buff1 = Buffer.alloc(8)
const buff1 = Buffer.allocUnsafe(8)
buff1[0] = 97
const buff2 = Buffer.allocUnsafe(32768);


buff2[5] = 98










console.log('end');