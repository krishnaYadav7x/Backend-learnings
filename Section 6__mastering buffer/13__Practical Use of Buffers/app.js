import fs from 'fs/promises'

// const a = await fs.readFile('file.txt')
const a = await fs.readFile("C:\\Users\\kris9\\Downloads\\image.png");

console.log(a.byteLength);