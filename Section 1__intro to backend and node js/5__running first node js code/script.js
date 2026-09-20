// Browser JavaScript → mainly controls the webpage
// Node.js → JavaScript can interact with the computer/server environment


const fs = require('fs')


const text = fs.readFileSync("C:\\Users\\kris9\\Desktop\\text.txt");
console.log(text.toString());
console.log(global);
console.log('end');



// One small correction: Node.js doesn't mean your code automatically has unlimited access to every file. It runs with the permissions of the user/process running it, and OS permissions still apply.