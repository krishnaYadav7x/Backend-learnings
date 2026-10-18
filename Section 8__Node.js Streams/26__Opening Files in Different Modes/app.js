import fs from 'fs'
const fd = fs.openSync('txt.md','w')
fs.writeSync(fd,'hello')
const fd2 = fs.openSync("new.txt", "r+");
fs.writeSync(fd2,'helloooo')