import express from "express";

const app = express();
const port = 3000;

app.use((req,res,next)=>{
  console.log('Middleware')
  res.write("Middleware ")
  next()
})

app.get('/',(req,res)=>{
  console.log("Get home route")
  res.end('Get home route')
})

app.get('/login',(req,res)=>{
  console.log("login home route")
  res.end("login home route")
})

app.post('/admin',(req,res)=>{
  console.log("admin home route")
  res.end("admin home route")
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});