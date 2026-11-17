import express from "express";

const app = express();
const port = 3000;

// app.use((req,res,next)=>{
//   console.log('first middleware')
//   next()
// })

app.use("/products", (req, res) => {
  res.send("product route");
});

app.use("/products/1", (req, res, next) => {
  console.log(req.url);
  res.send("home route");
  next();
});

app.get("/products/1", (req, res) => {
  console.log(req.url);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
