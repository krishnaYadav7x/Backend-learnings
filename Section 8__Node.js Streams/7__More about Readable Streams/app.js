import fs from "fs";

const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: 4,
  encoding: "utf-8",
});
// readStream.setEncoding("utf-8");
readStream.on("data", (chunk) => {
  console.log(chunk);
  // readStream.destroy(new Error('err'))
});


// readStream.on("error", (err) => {
//   console.log({err});
// });



// readStream.on('close',()=>{
//   console.log('closed');
// })
// readStream.on('end',()=>{
//   console.log('end');
// })
// readStream.destroy()

readStream.on('open',(data)=>{
  console.log('opened',data);
})
readStream.on('close',(data)=>{
  console.log("close", data);
})



