import net from "node:net";

const socket = net.createConnection({ host: "10.253.238.185",port:4000 });

setTimeout(()=>{
  socket.write('msg from client')
},3000)

socket.on('error',()=>{
  console.log('server lost')
})

socket.on('data',(chunk)=>{
  console.log(chunk.toString())
})