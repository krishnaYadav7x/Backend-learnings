const fs = require('fs')


const text = fs.readFileSync("C:\\Users\\kris9\\Desktop\\text.txt");
console.log(text.toString());
console.log(global);
console.log('end');