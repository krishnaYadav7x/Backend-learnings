import express from "express";
import filesData from "../filesDB.json" with { type: "json" };
import directoriesData from "../directoriesDB.json" with { type: "json" };
import path from "node:path";
import { createWriteStream } from "node:fs";
import { rm, writeFile } from "node:fs/promises";
import { pipeline } from "node:stream/promises";

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const fileData = filesData.find((file) => file.id === id);
  if (!fileData) {
    return res.status(404).json({ message: "File not found" });
  }
  const extension = path.extname(fileData.filename);
  return res.sendFile(`${process.cwd()}/storage/${id}${extension}`, (err) => {
    if (!res.headersSent && err) {
      return res.status(404).json({ error: "File not found" });
    }
  });
});

router.post("{/:filename}", async (req, res) => {
  const parentDirId = req.headers.parentdirid || directoriesData[0].id;

  const filename = req.params.filename || "Untitled";
  const id = crypto.randomUUID();
  const extension = path.extname(filename);

  const writeStream = createWriteStream(`./storage/${id}${extension}`);

  const parentDir = directoriesData.find((dir) => dir.id === parentDirId);

  try {
    await pipeline(req, writeStream);

    const fileData = { id, filename, extension, parentDirId };
    parentDir.files.push(id);
    filesData.push(fileData);

    await writeFile("./filesDB.json", JSON.stringify(filesData));
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesData));

    return res
      .status(201)
      .json({ message: "File created successfully", fileData });
  } catch (err) {
    console.log(err.message);

    return res.status(500).json({ message: "File not created" });
  }
});

router.delete("/:id", async (req, res,next) => {
  const { id } = req.params;
  const fileData = filesData.find((file) => file.id === id);
  if(!fileData){
    return res.status(404).json({message:"File not found"})
  }
  const extension = path.extname(fileData.filename);


  const filteredFileData = filesData.filter((file) => file.id !== id);
  const parentDir = directoriesData.find(
    (dir) => dir.id === fileData.parentDirId,
  );
  parentDir.files = parentDir.files.filter((fileId) => fileId !== id);
  try {
    throw new Error('hello')
    await rm(`./storage/${id}${extension}`);
    await writeFile("./filesDB.json", JSON.stringify(filteredFileData));
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesData));
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    // console.log(err.message);
    // err.status = 503
    // return res.status(500).send({ message: err.message });
    next(err)
  }
});

router.patch("/:id", async (req, res,next) => {
  const { id } = req.params;
  const { newName } = req.body;
  const fileData = filesData.find((file) => file.id === id);
  fileData.filename = newName

  try {
    throw new Error('hello')
    await writeFile("./filesDB.json", JSON.stringify(filesData));
    return res.status(200).json({ message: "Renamed successful" })
  } catch (err) {
    err.status = 503
    next(err)
  }
})

export default router;
