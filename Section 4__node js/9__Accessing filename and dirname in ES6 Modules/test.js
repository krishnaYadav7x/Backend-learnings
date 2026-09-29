import{num} from './test2.js'
process.chdir('./src')

const meta = import.meta
meta.myName = 'krishna'
const {dirname,filename} = import.meta
console.log(dirname);
console.log(process.cwd());
console.log('end')






// dirname tells you where the current file is.
// process.cwd() tells you where the process is currently working from.
