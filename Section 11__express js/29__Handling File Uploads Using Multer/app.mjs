import express from "express";
import multer from "multer";
import crypto from "node:crypto";
import path from "node:path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const id = crypto.randomUUID();
    file.id = id;
    const extension = path.extname(file.originalname);
    cb(null, `${id}${extension}`);
  },
});

const upload = multer({ storage: storage });

const app = express();
const PORT = 4000;

app.post(
  "/upload",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "bg", maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.body);
    console.log(req.files);

    res.json(req.files);
  },
);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
