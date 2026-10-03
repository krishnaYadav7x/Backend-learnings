import fsPromises, { mkdir, readFile, stat } from "node:fs/promises";
import {watch} from 'node:fs'
import { unlink, rmdir, rm, writeFile, rename } from "node:fs/promises";
// import fs from "node:fs/promises";

// await fsPromises.rename("natures.jpg", "nature.jpg");
// console.log('renamed');

// await fsPromises.copyFile(
//   "./nature.jpg",
//   "C:\\Users\\kris9\\Desktop\\nature.jpg",
// );

//  fsPromises.copyFile(
//   "./nature.jpg",
//   "natural.jpg",
// );

// fsPromises.cp("./cmd", "C:\\Users\\kris9\\Desktop\\src",{recursive:true});

// fsPromises.cp("./cmd", "./copiedCMD",{recursive:true});

// fsPromises.rename("./CMD", "C:\\Users\\kris9\\Desktop\\src3");

//rename method is use to for move and rename

// unlink("C:\\Users\\kris9\\Desktop\\src3");

// rm('hii',{recursive:true})

// writeFile('hello.js','')  //createfile

// rename('src','rcc')
// mkdir('helloWorld')
// const stats = await stat('rcc')

// console.log(stats);

watch('files.txt',async (eventType,fileName)=>{
  if(eventType==='change'){
    console.log(await readFile("files.txt",'utf-8'));
  }
})







































