import express from "express";
import {open} from 'node:fs/promises'

const app = express();
const port = 3000;

  // app.use(express.static("public"));

app.get('/getVideo',(req,res)=>{
  // const handleFile = await open('public/test4.webm')
  // const stats = await handleFile.stat()
  // const readStream = handleFile.createReadStream()

  // readStream.on('data',(chunk)=>{
  //   res.write(chunk)
  // })
  console.log(import.meta.dirname);
  res.sendFile(`${import.meta.dirname}/image-nature.jpg`);


})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})