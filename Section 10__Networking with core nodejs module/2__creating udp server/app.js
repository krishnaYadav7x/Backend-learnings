import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");
socket.on('message',(message,info)=>{
  console.log(message)
  console.log(message.toString())
  console.log(info) //remoteAddress
  socket.send('msg received',info.port,info.address)
})

// socket.on('listening',()=>{
//   console.log('listening')
//   console.log(socket.address())
// })

socket.bind({port:4000},()=>{
  const address = socket.address()
  console.log(`listening on port ${address.port}`)
})