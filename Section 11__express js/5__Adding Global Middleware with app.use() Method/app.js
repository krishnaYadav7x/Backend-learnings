import express from "express";

const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   // res.end("Global middleware");
//   // console.log(req.headers);
//   // console.log(req.url);
//   req.on('data',(chunk)=>{
//   const reqBody = JSON.parse(chunk.toString())
//   req.body = reqBody
//   })
//   req.on('end',()=>{
//     next();
//   })
// });

app.use(express.json())

const jsonParser = express.json()
console.log(jsonParser)

app.get("/", (req, res) => {
  res.end("hello from home route");
});
app.get("/login", (req, res) => {
  res.end("hello from login route");
});
app.post("/user", (req, res) => {
  console.log(req.body)
  res.end("hello from user route");
  // next()
});



app.listen(port, "0.0.0.0", () => {
  console.log(`server listen on port ${port}`);
});
