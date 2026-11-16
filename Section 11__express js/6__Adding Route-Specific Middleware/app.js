import express from 'express'

const app = express()
const port = 3000

// app.use("/user/1", (req, res, next) => {
//   console.log("user/1/ executed");
//   console.log(req.headers);
//   res.end("user/1/ middleware end");
//   // next()
// });

// app.use("/user", (req, res, next) => {
//   console.log("user executed");
//   console.log(req.headers);
//   res.end("user middleware end");
//   // next()
// });

app.use('/',(req,res,next)=>{
  console.log('global executed')
  console.log(req.headers)
  res.end('global middleware')
  next()
})



app.get('/',(req,res)=>{
   console.log("home executed");
  res.end('hello from server')
})

app.get("/login", (req, res) => {
  console.log(req.url)
  console.log(req.route.path)
  console.log("login executed");
  res.end("logged in");
});


app.post('/',(req,res)=>{
   console.log("post executed");
  res.end('post route')
})

app.listen(port,'0.0.0.0',()=>{
  console.log(`listening on port ${port}`)
})