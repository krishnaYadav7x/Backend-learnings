import { createReadStream } from 'node:fs';
import net from 'node:net'
const server = net.createServer((socket)=>{

 socket.write(
   `HTTP/1.1 200 OKAY
Access-Control-Allow-Origin:*
Access-Control-Expose-Headers:*\n\nhello`
 );
  socket.end()



  const readStream = createReadStream(
    "C:\\Users\\kris9\\Downloads\\file_000000003c5882118c239d8e9b37b819.png",
  );

    // readStream.on("data", (chunk) => {
    //   socket.write(chunk);
    // });

})

server.listen(1000,'0.0.0.0')