import fs from 'fs'


// console.log(process.stdin.fd);
// console.log(process.stdout.fd);
// console.log(process.stderr.fd);





const fd1 = fs.openSync("hello.txt");

const fd2 = fs.openSync('text.txt')
console.log(fd1,fd2);









