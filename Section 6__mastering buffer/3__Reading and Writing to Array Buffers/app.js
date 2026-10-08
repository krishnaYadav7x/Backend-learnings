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

view.setInt8(0,40)
view.setInt8(1,41)
view.setInt8(2,42)
view.setInt8(3,43)
console.log(view);















