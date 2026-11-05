import net from "node:net";
const socket = net.createConnection({ host: "10.253.238.185" ,port:'1000'})
process.stdin.on('data',(chunk)=>{
  socket.write(chunk)
})

socket.on('data',(chunk)=>{
  console.log(chunk.toString())
})

socket.on('error',()=>{
  console.log('server closed')
})