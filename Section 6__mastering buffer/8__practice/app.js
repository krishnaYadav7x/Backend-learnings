// An ArrayBuffer provides a fixed-size block of binary storage, measured in bytes. JavaScript uses DataView or Typed Arrays to read and write data in that storage. The data is represented by bits, and the view determines how those bits are interpreted.


const a = new ArrayBuffer(4)

const view = new DataView(a)
// view.setInt8(0,50)
// view.setInt8(1,51)
// view.setInt8(2,52)
// view.setInt8(3,260)

// view.setInt8(1,-5)


// view.setInt16(0,256)
view.setInt16(0,256)


// console.log(view.getUint8(3));
console.log(view.getInt16(0));




console.log('a');
console.log('end');