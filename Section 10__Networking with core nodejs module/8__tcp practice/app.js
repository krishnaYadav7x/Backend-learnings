import net from 'node:net'
const server = net.createServer()

const socketsList = []
  process.stdin.on('data',(input)=>{
    socketsList.forEach((socket)=>{
      if(socket.remoteAddress==='10.253.238.85'){
        socket.write(input);
      }
    })
  })
server.on('connection',(socket)=>{
  socketsList.push(socket)
  console.log(socketsList.length)
  console.log(socket.remoteAddress)
  socket.on('data',(chunk)=>{
    console.log(chunk.toString())
  // socketsList.forEach((s,i)=>{
  //   s.write(socket.remoteAddress + ": client connected");
  // })    
   
  })
  socket.on('close',()=>{
    console.log(socket.remoteAddress, ": client left");
  })
  socket.on('error',()=>{
    console.log(socket.remoteAddress, ": client disconnected");
  })
  console.log(socket.remoteAddress, ': client connected')
})

server.listen(1000,'0.0.0.0')