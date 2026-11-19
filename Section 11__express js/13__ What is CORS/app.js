import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// Serve static files
app.use(express.static("public"));

// Log incoming request details
app.use((req, res, next) => {
  console.log(req.headers);
  console.log(req.method);
  next();
});

// Enable CORS
app.use(cors());

// Custom CORS configuration

// app.use(cors({
//   allowedHeaders: 'Content-Type'
// }))

// Manual CORS configuration

// app.use((req, res, next) => {
//   const origins = ["http://127.0.0.1:5501", "http://localhost:5501"]

//   if (origins.includes(req.headers.origin)) {
//     res.set("Access-Control-Allow-Origin", req.headers.origin)
//   }

//   res.set("Access-Control-Allow-Origin", '*')
//   res.set("Access-Control-Allow-Methods", 'PUT')
//   // res.set("Access-Control-Allow-Methods", 'DELETE')
//   res.set("Access-Control-Allow-Headers", 'Content-Type')

//   next()
// })

// GET request
app.get("/api", (req, res) => {
  console.log(req.headers.origin);
  res.json({ message: "hello, world get" });
});

// POST request
app.post("/api", (req, res) => {
  res.json({ message: "hello, world post" });
});

// PUT request
app.put("/api", (req, res) => {
  res.json({ message: "hello, world put" });
});

// DELETE request
app.delete("/api", (req, res) => {
  res.json({ message: "hello, world delete" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http port ${PORT}`);
});
