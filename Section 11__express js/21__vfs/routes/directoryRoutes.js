import express from "express";
import filesData from "../filesDB.json" with { type: "json" };
import directoriesData from "../directoriesDB.json" with { type: "json" };
import path from "node:path";
import { createWriteStream } from "node:fs";
import { rm, writeFile } from "node:fs/promises";

const router = express.Router();

router.get("{/:id}", (req, res) => {
  const id = req.params.id || directoriesData[0].id;
  const directoryData = directoriesData.find((dir) => dir.id === id);
  if (!directoryData) {
    return res.status(404).json({ message: "Directory not found" });
  }
  const files = directoryData.files.map((fileId) => {
    return filesData.find((file) => file.id === fileId);
  });

  const directories = directoryData.directories.map((dirId) => {
    return directoriesData.find((dir) => dir.id === dirId);
  });

  return res.status(200).json({ ...directoryData, files, directories });
});

router.post("{/:parentDirId}", async (req, res, next) => {
  const parentDirId = req.params.parentDirId || directoriesData[0].id;
  const parentDir = directoriesData.find((dir) => dir.id === parentDirId);
  if (!parentDir) {
    return res.status(404).json({ message: "Invalid Parent Directory" });
  }
  const dirname = req.headers.dirname || "New folder";
  const id = crypto.randomUUID();

  const dirData = {
    id,
    name: dirname,
    parentDirId,
    files: [],
    directories: [],
  };

  directoriesData.push(dirData);
  parentDir.directories.push(id);
  try {
    // throw new Error('liii')
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesData));
    res.status(201).json({ message: "Directory created" });
  } catch (err) {
    next(err);
  }
});

router.patch("{/:id}", async (req, res,next) => {
  const { id } = req.params;
  const dirData = directoriesData.find((dir) => dir.id === id);
  if(!dirData) return res.status(404).json({message:"Directory not found"})

  const { newName } = req.body;
  dirData.name = newName;
  try {
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesData));
    res.status(200).json({ message: "Renamed successful" });
  } catch (err) {
    // res.json({ message: err.message });
    next(err)
  }
});

export default router;
