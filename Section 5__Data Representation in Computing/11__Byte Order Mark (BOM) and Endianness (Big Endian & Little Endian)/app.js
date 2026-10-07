import fs from "fs/promises";

const contentBuffer = await fs.readFile("text.txt");

console.log(contentBuffer.toString('ut'))

// 11101111  10111111 10111110
