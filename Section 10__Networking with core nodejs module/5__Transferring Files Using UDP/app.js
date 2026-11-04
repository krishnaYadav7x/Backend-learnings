import dgram from 'node:dgram'
import { createWriteStream } from 'node:fs'

const socket = dgram.createSocket("udp4")

const writeStream = createWriteStream('a.mp4',{highWaterMark:50000})

socket.on('message',(message,remoteInfo)=>{
  writeStream.write(message)
  // console.log(message)
  // console.log(message.toString())
  // console.log(remoteInfo)
  socket.send("msg received", remoteInfo.port,remoteInfo.address);
})


socket.bind(1000)