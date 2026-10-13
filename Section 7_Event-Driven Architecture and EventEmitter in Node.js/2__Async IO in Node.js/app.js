import fsPromises from 'fs/promises'
import fs from 'fs'

setTimeout(()=>{
  console.log('hii');
},0)

//async IO
// const fileContent = await fsPromises.readFile('notes.md','utf-8')
 fs.readFile("notes.md", "utf-8",(err,data)=>{
  console.log(data);
});

//sync io
// const fileContent =  fs.readFileSync('notes.md','utf-8')

// console.log(fileContent);