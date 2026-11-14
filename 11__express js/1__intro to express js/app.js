import express from 'express'

const app = express()
// console.log(app)

app.disable("x-powered-by")

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  // res.end('hello world')
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});


// content-type        // text/html; charset=utf-8
// etag               // W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"

// extra header 




