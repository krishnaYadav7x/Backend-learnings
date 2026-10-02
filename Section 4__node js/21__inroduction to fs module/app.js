// import fs from 'node:fs'
import fs from 'node:fs/promises'


// const contentBuffer = fs.readFileSync('./index.html','utf-8')
// console.log(contentBuffer);
//generally we dont use it it read file synchronously block main thread 



// const content = fs.readFile("./index.html", (err,data)=>{
//   const content = data.toString()
//   console.log(content);
// });
// console.log('end');

console.time()
let i=0
const timer = setInterval(()=>{
console.log(++i)
if(i===150){
clearInterval(timer)
console.timeEnd();
}
},2)


const content = await  fs.readFile("./index.html")

console.log('running');
console.log('end');












