import fs from "fs";
const readStream = fs.createReadStream('chars.txt',{highWaterMark:4,encoding:'utf-8'})

// In Node.js, we use the .on() method to listen for an event and execute a callback function whenever that event occurs.

readStream.on("close", () => {
  console.log("stream close"); //'close' event fires when the stream and its underlying resource have been closed.
});

readStream.on('data',(chunks)=>{
  console.log(chunks);
  // readStream.pause()
})

// readStream.setEncoding('utf-8')

readStream.on('end',()=>{
  console.log("stream end"); //'end' event fires when there is no more data available to be consumed from the stream.
})

readStream.on("error", () => {
  console.log("error occur"); //'error' event fires when an error occurs in a stream. It allows you to handle errors instead of letting them go unhandled.
});


readStream.on("open", () => {
  console.log("stream open"); //'open' event fires when a file's underlying file descriptor has been opened successfully in a file stream.
});


readStream.on("pause", () => {
  console.log("stream paused"); //'pause' is an event that fires when a flowing stream stops emitting 'data' events because it has been paused.
});

readStream.on("ready", () => {
  console.log("ready stream"); //'ready' event generally indicates that something is initialized and ready to be used.
});













