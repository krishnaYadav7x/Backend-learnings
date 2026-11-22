import express from "express";

import fileRoute from "./routes/fileRoutes.js";
import directoryRoute from "./routes/directoryRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/directory", directoryRoute);
app.use("/file", fileRoute);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server running on port ${PORT}`);
});
