import path from 'node:path'

// console.log(path)
// console.log(path.join("/test", "../../hello", "krishna"));
// console.log(path.normalize("/test/////hello/krishna"));
// console.log(path.normalize("/test/../../../hello/krishna"));
// console.log(path.normalize("../../../hello/krishna"));
// console.log(path.normalize("/../../hello/krishna"));

// console.log(process.cwd())
//  /hi from root
// console.log(path.resolve('krishna','fg')) //add in cwd
// console.log(import.meta.dirname)

// console.log(path.resolve('/ram'))

console.log(path.basename('/ram/krishna/ral'))
console.log(path.dirname('/ram/krishna/ral'))