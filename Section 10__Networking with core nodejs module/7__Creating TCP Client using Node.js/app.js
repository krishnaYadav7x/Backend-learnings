import net from 'node:net'

const server = net.createServer((socket)=>{
  socket.on('data',(chunk)=>{
    console.log(chunk.toString())
    socket.write('HTTP\n\nmessage received')
    // socket.end()
  })
  socket.on('close',()=>{
    console.log(socket.remoteAddress,': client disconnect')
  })

  socket.on('error',()=>{
    console.log('lost')
  })

  console.log(socket.remoteAddress, ": client connected");
})



server.listen(4000,'0.0.0.0',()=>{
  console.log('server started on port')
})