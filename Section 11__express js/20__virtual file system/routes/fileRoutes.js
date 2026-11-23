import express from "express";
import { createWriteStream } from "node:fs";
import { rm, writeFile } from "node:fs/promises";
import path from "node:path";
import filesData from "../filesDB.json" with { type: "json" };
import directoriesData from "../directoriesDB.json" with { type: "json" };
// console.log(directoriesData)
const router = express.Router();

router.post("/:filename", (req, res) => {
  const parentDirId = req.headers.parentdirid || directoriesData[0].id;
  console.log(parentDirId);
  const { filename } = req.params;
  const id = crypto.randomUUID();
  const extension = path.extname(filename);
  const writeStream = createWriteStream(`./storage/${id}${extension}`);
  req.pipe(writeStream);
  req.on("end", async () => {
    res.json({
      id,
      name: filename,
      extension,
      parentDirId,
    });
    filesData.push({
      id,
      name: filename,
      extension,
      parentDirId,
    });
    const parentDirData = directoriesData.find(
      (directoryData) => directoryData.id === parentDirId,
    );
    parentDirData.files.push(id);
    await writeFile("./filesDB.json", JSON.stringify(filesData));
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesData));
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const { action } = req.query;

  const fileData = filesData.find((file) => file.id === id);
  const { id: fileId, extension } = fileData;
  if (action === "download") {
    res.setHeader(
      "Content-Disposition",
      `attachment; filename = ${fileData.name}`,
    );
  }
  res.sendFile(`${process.cwd()}/storage/${fileId}${extension}`);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const fileData = filesData.find((file) => file.id === id);
  const oldName = fileData.name
  const { newName } = req.body;
  fileData.name = newName;
  await writeFile("./filesDB.json", JSON.stringify(filesData));

  res.json({ newName ,oldName});
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const fileData = filesData.find((file) => file.id === id);
  console.log(fileData);
  const extension = path.extname(fileData.name);
  await rm(`./storage/${id}${extension}`);
  const remainFileData = filesData.filter((file) => file.id !== id);
  await writeFile("./filesDB.json", JSON.stringify(remainFileData));
  const parentDirData = directoriesData.find(
    (directoryData) => directoryData.id === fileData.parentDirId,
  );
  parentDirData.files = parentDirData.files.filter((fileId) => fileId !== id);
  await writeFile("./directoriesDB.json", JSON.stringify(directoriesData));
  res.json({ message: "Successfully deleted" });
});

export default router;
