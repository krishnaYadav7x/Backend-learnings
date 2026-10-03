import { readFile, writeFile,appendFile } from "node:fs/promises";

// const contentBuffer = await readFile("C:\\Users\\kris9\\Desktop\\file-1.txt")

// console.log(contentBuffer);

// writeFile('text.md',contentBuffer)

try {
  const contentBuffer = await readFile("./nature.jjpg");
  writeFile("C:\\Users\\kris9\\Desktop\\natureImage.png", contentBuffer);
} catch (err) {
  console.log(err);
  console.log('To see full error go to ./error.log page');
  appendFile(
    "./error.log",
    `\n\n${new Date().toLocaleTimeString()}\n${err.message} \n ${err.stack}`,
  );
}
// console.log(contentBuffer);

// setInterval(()=>{
//     writeFile("./realTime.txt", new Date().toLocaleString());
// },500)
