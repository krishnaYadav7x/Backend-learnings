const file1Obj = {}
import { readFile } from "fs/promises";

const files = process.argv.slice(2);
const word = files[1];
// console.log(files);
// console.log(word);

const file1Content = await readFile(files[0], "utf-8");
const storedContent = file1Content;

const wordsArray = storedContent.split(/[\W]/).filter((w) => w);

// console.log(wordsArray);

for (const word of wordsArray) {
  const lowerCaseWord = word.toLowerCase();
  file1Obj[lowerCaseWord]
    ? file1Obj[lowerCaseWord]++
    : (file1Obj[lowerCaseWord] = 1);
}
const wordCount = file1Obj[word?.toLowerCase()];
const wordsObject = file1Obj;

if (word) {
  console.log(wordCount);
} else {
  console.log(wordsObject);
}
