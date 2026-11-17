import express from 'express'

const app = express()
const port = 3000

app.get('/',(req,res)=>{
  // res.setHeader('Content-Type','application/json')
  // res.end(JSON.stringify({ message: "hello from server" }));
  res.status(301).json({ message: "hello from server" });
})

app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})