import express from "express";
import cors from 'cors'

import fileRoutes from "./routes/fileRoutes.js";
import directoryRoutes from './routes/directoryRoutes.js'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());



app.use("/directory", directoryRoutes);
app.use("/file", fileRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl,
  });
});

app.use((err,req,res,next)=>{
  res.status(err.status||500).json({message:"Something went wrong"})
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
