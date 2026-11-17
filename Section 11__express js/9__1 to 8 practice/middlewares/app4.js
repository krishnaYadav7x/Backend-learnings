import express from "express";

const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log("first middleWare");
//   req.on("data", (chunk) => {
//     const reqBody = JSON.parse(chunk.toString());
//     req.body = reqBody;
//   });
//   req.on('end',()=>{
//     next()
//   })
// })

app.use(express.json())

app.get("/", (req, res) => {
  res.send("home route");
});

// app.post("/", (req, res) => {
//   console.log('from post route',req.body);

//   res.send("got it");
// });

app.post("/admin", (req, res) => {
  console.log('from post route',req.body);

  res.send("got it");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
