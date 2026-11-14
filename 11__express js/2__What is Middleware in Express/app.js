import express from "express";

const app = express();
const port = 3000;


// express store it in array 
app.get(
  "/",
  (req, res, next) => {
    //request handler middlewares  -3params
    try{
      console.log("running middleware 1");
      throw new Error ("err occurred")
    res.end("Hello World 1");
    }catch(err){
      next(err);
    }
   // next(); //call next req handler middleware
  //  next(); //call next err handler middleware

  },
  (err, req, res, next) => {
    //error handler middlewares -4params
    console.log("running err middleware 2");
    console.log(err.message)
    res.end("Error occurred");
  
  },
  (req, res,next) => {
    //request handler middlewares -2params
    console.log("running req middleware 2");
    res.end("Hello World 2");
    next()
  },
  (req, res) => {
    //request handler middlewares -2params
    console.log("running req middleware 2");
    res.write("Hello World 2");
  },
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});