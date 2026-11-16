import express from "express";

const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
  console.log('global middleware')
  // res.end('end')
  // req.on("data", (chunk) => {
  //   const reqBody = JSON.parse(chunk.toString());
  //   if (reqBody["password"] === "nodejs") {
  //     next();
  //   } else {
  //     res.end("Invalid password");
  //   }
  // });
  next()
});

// app.get('/login',(req,res)=>{
//   res.end('logged in')
// })
// app.get('/login/1',(req,res)=>{
//   res.end('logged in 1')
// })

app.use("/admin", (req, res, next) => {
  req.on("data", (chunk) => {
    const reqBody = JSON.parse(chunk.toString());
    if (reqBody["password"] === "nodejs") {
      next();
    } else {
      res.end("Invalid password");
    }
  });
});
app.post("/admin", (req, res) => {
  res.end('Password correct')
});

app.listen(port, "0.0.0.0", () => {
  console.log(`listening on port ${port}`);
});
