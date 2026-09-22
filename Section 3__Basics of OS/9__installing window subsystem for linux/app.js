// const{exec} = require('child_process')

// exec(`powershell -Command "setx /M learning "backend""`);

// const environmentVariables = process.env
// console.log(environmentVariables.name);

// setInterval(()=>{console.log('krishna')},1000)

// const num = process.env.num
// console.log(num);
// process.env.num = 4567
// console.log(process.env.num);

// const fs = require('fs')
// const fileData = fs.readFileSync('./abcd').toString()
// console.log(fileData);

// const fs = require("fs");

// const fileData = fs.readFileSync("./.env").toString();
// console.log(fileData);

// console.log(process.env);

// fileData.split("\r\n").forEach((v)=>{
//   const[key,value] = v.split('=')
//   console.log(key,value);
//   process.env[key] = value
// })
// console.log(process.env);

// const {exec} = require('child_process')
// exec(`setx isReading 'yeah'`)

// const environmentVariables = process.env
// console.log(environmentVariables.isCoding);

// console.log('hii');

const { exec } = require("child_process");

// exec('setx learning "backend"');

const fs = require("fs");
const fileData = fs.readFileSync("./.env").toString();
fileData.split("\n").forEach((v) => {
  const [key, value] = v.split("=");
  process.env[key] = value;
});

console.log(process.env);

console.log("krishna");
