import dgram from "node:dgram";
const socket = dgram.createSocket("udp4");

socket.on('message',(msg,info)=>{
  console.log(msg.toString())
  console.log(info)
  socket.close()
})


socket.send('hello from client',4000)