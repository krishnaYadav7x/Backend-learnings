import express from "express";

const app = express();
const port = 3000;

app.post(
  "/",
  (req, res, next) => {
    req.on("data", (chunk) => {
      // const reqBody = JSON.parse(chunk.toString());
      // if (reqBody.password === "correct") {
      //   res.send("Password is correct");
      // } else {
      //   req.on('end',()=>{
      //     next("Password not correct");
      //   })
      // }

    });
  },
  (req, res) => {
    res.end("from server");
  },
  (err, req, res,next) => {
    console.log(err);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ message: "got an error" }));
  },
);

app.get("/login", (req, res) => {
  res.send("from server");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
