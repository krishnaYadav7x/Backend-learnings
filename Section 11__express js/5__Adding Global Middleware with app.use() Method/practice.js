import express from "express";

const app = express();
const port = 3000;

// ---------------- Global Middleware ----------------

// Custom Global Middleware (Manual Body Parsing)
// app.use((req,res,next)=>{
//   // res.end('its global middleware')
//   req.on('data',(chunk)=>{
//     const body = JSON.parse(chunk.toString())
//     console.log(body)
//   })
//   next()
// })

// Built-in Global Middleware (JSON Body Parsing)
// Parses incoming JSON request data and makes it available through req.body
app.use(express.json());

// ---------------- GET Routes ----------------

// Home Route
app.get("/", (req, res) => {
  console.log(res.end("home route"));
});

// Product Route
app.get("/product", (req, res) => {
  console.log(res.end("product route"));
});

// ---------------- POST Routes ----------------

// Create / Handle POST Request
app.post("/", (req, res) => {
  // Access parsed JSON data from the request body
  // req.body is available because of express.json() middleware
  console.log(req.body);

  res.end("this is post route");
});

// ---------------- Start Server ----------------

app.listen(port, "0.0.0.0", () => {
  console.log(`listening on port ${port}`);
});
