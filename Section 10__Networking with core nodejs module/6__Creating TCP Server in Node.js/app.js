import net from 'node:net'

const server = net.createServer()
server.listen(4000, () => {
  console.log("server started on port 4000");
});

server.on('connection',(socket)=>{
  socket.on('data',(chunk)=>{
    console.log(chunk.toString())
  })
  socket.write('HTTP\n\nmsg received')
  socket.end()
  socket.on('close',()=>{
    console.log('client disconnected')
  })
  console.log(socket.address())
  console.log(socket.remoteAddress)
  console.log(socket.remoteFamily)
  console.log(socket.remotePort)
  console.log('client connected')
})