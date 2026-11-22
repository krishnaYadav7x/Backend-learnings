import express from "express";
import { createWriteStream } from "node:fs";
import { rm, writeFile } from "node:fs/promises";
import path from "node:path";
import filesData from "../filesDB.json" with { type: "json" };


const router = express.Router();

router.post("/:filename", (req, res) => {
  const { filename } = req.params;
  const id = crypto.randomUUID();
  const extension = path.extname(filename);
  const writeStream = createWriteStream(`./storage/${id}${extension}`);
  req.pipe(writeStream);
  req.on("end", async () => {
    res.json({ message: "File uploaded" });
    filesData.push({
      id,
      name: filename,
      extension,
    });
    await writeFile("./filesDB.json", JSON.stringify(filesData));
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const fileData = filesData.find((file) => file.id === id);
  const { id: fileId, extension } = fileData;

  res.sendFile(`${process.cwd()}/storage/${fileId}${extension}`);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const fileData = filesData.find((file) => file.id === id);

  const { newName } = req.body;
  fileData.name = newName;
  await writeFile("./filesDB.json", JSON.stringify(filesData));

  res.json({ message: "Got patch request" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const fileData = filesData.find((file) => file.id === id);
  const extension = path.extname(fileData.name);
  await rm(`./storage/${id}${extension}`);
  const remainFileData = filesData.filter((file) => file.id !== id);
  await writeFile("./filesDB.json", JSON.stringify(remainFileData));

  res.json({ message: "Successfully deleted" });
});

export default router;
