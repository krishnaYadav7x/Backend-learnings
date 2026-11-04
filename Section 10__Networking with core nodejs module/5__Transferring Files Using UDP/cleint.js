import dgram from 'node:dgram'
import { createReadStream } from 'node:fs'

const socket = dgram.createSocket("udp4")

const readData = createReadStream(
  "C:\\Users\\kris9\\Downloads\\is-Live-SnapYT.App.webm",
  { highWaterMark: 50000 },
);


socket.on('message',(msg,rinfo)=>{
  // console.log(msg.toString())
  // console.log(rinfo)
  // socket.close()
})

readData.on('data',(chunk)=>{
  socket.send(chunk, 1000, "127.0.0.1");
})

// socket.send('hello from client',1000)