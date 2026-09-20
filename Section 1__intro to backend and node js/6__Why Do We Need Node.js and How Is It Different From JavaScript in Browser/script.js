// const fs = require("fs");

// fs.unlinkSync("C:\\Users\\kris9\\Desktop\\anotherName.txt");

// fs.writeFileSync("C:\\Users\\kris9\\Desktop\\text.txt", "Hello ram");

// const text = fs.readFileSync("C:\\Users\\kris9\\Desktop\\text.txt");

// console.log(text.toString());
// console.log(global);
// console.log("end");

const { exec } = require("child_process");

exec("start chrome");