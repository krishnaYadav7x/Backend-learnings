import { createReadStream } from 'node:fs';
import net from 'node:net'
const server = net.createServer((socket)=>{
  socket.write('HTTP/1.1\n\nhello')
  const readStream = createReadStream(
    "C:\\Users\\kris9\\Downloads\\file_000000003c5882118c239d8e9b37b819.png",
  );

  readStream.pipe(socket)

  readStream.on('end',()=>{
    console.log('file end')
  })
   socket.on("data", (chunk) => {
     console.log(chunk.toString());
   });

// socket.on("end", () => {
//   socket.write('server : hello')
// });
  socket.on('error',()=>{
    console.log('error occur')
  })
  socket.on('close',()=>{
    console.log(socket.remoteAddress,': client disconnected')
  })
  
})


server.listen(1000,'0.0.0.0')