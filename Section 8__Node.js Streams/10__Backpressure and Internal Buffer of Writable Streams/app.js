import fs from 'fs'
const writeStream = fs.createWriteStream('file.txt',{highWaterMark:16})

// let isEmpty = writeStream.write('a')
// console.log(writeStream.writableLength);
// console.log(isEmpty);
// isEmpty = writeStream.write('b')
// console.log(writeStream.writableLength);
// console.log(isEmpty);
// isEmpty = writeStream.write('c')
// console.log(writeStream.writableLength);
// console.log(isEmpty);
// isEmpty = writeStream.write('d')
// console.log(writeStream.writableLength);
// console.log(isEmpty);
// isEmpty = writeStream.write('e')
// console.log(writeStream.writableLength);
// console.log(isEmpty);
// isEmpty = writeStream.write('f')
// console.log(writeStream.writableLength);
// console.log(isEmpty);
// isEmpty = writeStream.write('g')
// console.log(writeStream.writableLength);
// console.log(isEmpty);
// isEmpty = writeStream.write('h')
// console.log(writeStream.writableLength);
// console.log(isEmpty);

// console.log(writeStream.writableHighWaterMark);
// console.log(writeStream.writableLength);
let i=1
while( i<=100){
  console.log(writeStream.writableLength)
  let isEmpty = writeStream.write('a')
  if(!isEmpty){
    break
  }
  console.log(isEmpty);
}

writeStream.on('drain',()=>{
    console.log('drain',writeStream.writableLength);
    while (i <= 100) {
      console.log(writeStream.writableLength);
      let isEmpty = writeStream.write("a");
      if (!isEmpty) {
        break;
      }
      console.log(isEmpty);
    }
})








