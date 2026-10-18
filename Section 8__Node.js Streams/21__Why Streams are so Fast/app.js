import fs from "fs";
// console.time();
// for (let i = 1; i <= 5000; i++) {
//   if (i === 1) {
//     fs.writeFileSync("num.txt", `${i} `);
//   } else {
//     fs.appendFileSync("num.txt", `${i} `);
//   }
// }
// console.timeEnd();
console.time()
const writeStream = fs.createWriteStream('streamNum.txt')

for (let i = 1; i <= 5000; i++) {
  writeStream.write(`${i} ,`)
  if(i===5000)writeStream.end()
}

writeStream.on('finish',()=>{
  console.timeEnd()
})







