import express from "express";

const app = express();
const port = 3000;

app.get(
  "/",

  (req, res, next) => {
    console.log(" middleware 1");
    res.end("Home route");
  },
);
app.get(
  "/logging",

  (req, res, next) => {
    console.log(" middleware 2");
    res.end("Logging route");
  },
);
app.post(
  "/",

  (req, res, next) => {
    req.on('data',(chunk)=>{
      console.log(chunk.toString())
    })
    res.end("Post home route");
  },
);
app.delete(
  "/",

  (req, res, next) => {
    req.on('data',(chunk)=>{
      console.log(chunk.toString())
    })
    res.end("Delete home route");
  },
);
app.patch(
  "/",

  (req, res, next) => {
    req.on('data',(chunk)=>{
      console.log(chunk.toString())
    })
    res.end("Patch home route");
  },
);


app.listen(port, "0.0.0.0", () => {
  console.log(`listening on port ${port}`);
});
