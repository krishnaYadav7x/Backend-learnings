import fs from 'fs'
//readable
// console.log(process.stdin)
//WritableStream
// console.log(process.stdout)
// console.log(process.stderr)
// console.log('end');

// process.stdout.write('krishna\n')
// const writeStream = fs.createWriteStream('text.md')
// process.stdin.on('data',(chunk)=>{
//   writeStream.write(chunk)
//   console.log('received data',chunk);
// })



// console.log(process.stdin.fd)

// console.log(process.stdout.fd)
// console.log(process.stderr.fd)





import { spawn } from 'child_process'
// const childProcess = spawn('cat',['text.md']) //he use 'node','filename'
// childProcess.stdout.on('data',(chunk)=>{
//   console.log(chunk.toString());
// })


process.stdout()


















