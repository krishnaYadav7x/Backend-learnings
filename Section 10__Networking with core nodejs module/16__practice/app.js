import { createReadStream } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";

// ==========================================
// 1. CREATE TCP SERVER
// ==========================================

const server = net.createServer(async (socket) => {
  // ==========================================
  // 2. OPEN FILE AND GET FILE INFORMATION
  // ==========================================

  // Open the PDF file.
  const handleFile = await open(
    "C:\\Users\\kris9\\Downloads\\JavaScript_Equality_Operators_Notes.pdf",
  );

  // Create a readable stream from the opened file.
  const readStream = handleFile.createReadStream();

  // Get file information (file size, etc.).
  const stat = await handleFile.stat();

  // console.log(stat)

  // ==========================================
  // 3. RECEIVE DATA FROM CLIENT
  // ==========================================

  // 'data' event: Fires when the client sends data to the server.
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  // ==========================================
  // 4. SEND HTTP RESPONSE STATUS AND HEADERS
  // ==========================================

  // Status line: Specifies the HTTP response status.
  // socket.write("HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: *\nAccess-Control-Expose-Headers: *\nhello: krishna\n\n");
  socket.write("HTTP/1.1 200 OK\n");

  // CORS: Allows requests from any origin.
  socket.write("Access-Control-Allow-Origin: *\n");

  // Allows JavaScript to access additional response headers.
  socket.write("Access-Control-Expose-Headers: *\n");

  // Content-Type: Specifies the type of response data.
  // socket.write("Content-Type: text/txt; charset=utf-8\n");
  // socket.write("Content-Type: video/webm\n");
  // socket.write("Content-Type: application/json\n");
  socket.write("Content-Type: application/pdf\n");

  // Content-Disposition: Tells the browser how to handle the file.
  socket.write("Content-Disposition: attachment;");

  // Content-Length: Specifies the response body size in bytes.
  socket.write(`Content-Length: ${stat.size}\n`);

  // Separates HTTP headers from the response body.
  // socket.write("\nLearning: nodejs");
  socket.write("\n\n");

  // ==========================================
  // 5. SEND RESPONSE DATA
  // ==========================================

  // socket.end('{"name":"krishna"}')
  // socket.end(
  //   "C:\\Users\\kris9\\Downloads\\JavaScript_Equality_Operators_Notes.pdf",
  // );

  // const readStream = createReadStream('numbers.txt')

  // pipe(): Transfers readable stream data into the socket.
  readStream.pipe(socket);

  // ==========================================
  // 6. READABLE STREAM EVENTS
  // ==========================================

  // 'end': Fires when the readable stream has finished reading.
  // readStream.on('end',()=>{
  //   console.log('reading finish')
  // })

  // socket.end()

  // ==========================================
  // 7. SOCKET INFORMATION AND EVENTS
  // ==========================================

  // remoteAddress: Returns the client's IP address.
  console.log(socket.remoteAddress, ": client connected");

  // 'error': Fires when a socket error occurs.
  socket.on("error", () => {
    console.log("error occur");
  });

  // 'close': Fires when the socket connection is closed.
  socket.on("close", () => {
    console.log("client disconnect");
  });
});

// ==========================================
// 8. START TCP SERVER
// ==========================================

// listen(): Starts listening for incoming connections.
// 0.0.0.0: Listens on all available IPv4 network interfaces.
server.listen(1000, "0.0.0.0");
