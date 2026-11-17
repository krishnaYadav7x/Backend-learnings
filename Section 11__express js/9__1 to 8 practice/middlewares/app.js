import express from "express";

const app = express();
const port = 3000;

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("hello from server");
});

// app.post('/',(req,res)=>{
//   req.on('data',(chunk)=>{
//     const reqBody = JSON.parse(chunk.toString())
//     console.log(reqBody)
//   })
//   res.send('hello from post route')
// })

app.get("/product", (req, res) => {
  res.end("this is product route");
});

app.get("/product/shoes", (req, res) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("PATH:", req.path);
  console.log("IP:", req.ip);
  console.log("Hostname:", req.hostname);
  console.log("Protocol:", req.protocol);
  console.log("User Agent:", req.get("user-agent"));
  console.log("Accept:", req.get("accept"));
  res.end("this is product shoes page");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
