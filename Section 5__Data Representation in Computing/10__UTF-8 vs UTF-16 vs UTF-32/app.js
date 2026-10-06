import {readFile,writeFile} from 'fs/promises'

const contentBuffer = await readFile('./notes.md')

console.log(0x61);
