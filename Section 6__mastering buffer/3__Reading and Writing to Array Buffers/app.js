// const a = new ArrayBuffer(4)
// const view = new DataView(a)
// const view2 = new DataView(a,1)
// view.setInt8(1,70)
// console.log(a);
// console.log(view);
// view.setInt8(0,80)
// view.setInt8(1,0b01010000)
// view2.setInt8(0,74);
// view2.setInt8(2,74);
// view.setInt8(2, 0x74);
// console.log(view2);
// console.log('end');



const a = new ArrayBuffer(4)
const view = new DataView(a)
// const view2 = new DataView(a,1)

// view.setInt8(1,41)
// view.setInt8(2,42)
// view2.setInt8(2,100)
view.setInt8(0,-1)
view.setInt8(1,127)
view.setInt8(2,227)
view.setInt8(3,129)
// view.setInt8(0,45)
console.log(view.getInt8(0));  //getInt read value as signed
console.log(view.getUint8(0));  //getInt read value as unsigned
console.log(view.getUint8(1)); //127  //getInt read value as unsigned
console.log(view.getInt8(1)); //127  //getInt read value as signed
console.log(view.getUint8(2)); //127  //getInt read value as unsigned
console.log(view.getInt8(2)); //127  //getInt read value as signed
console.log(view.getInt8(3));
console.log(view.getUint8(3));
// console.log(view.getUint8(0));
console.log(a);















