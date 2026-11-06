import net from "node:net";

//  all connected client sockets
const socketLists = [];
let currentClientIp;

// Handle input from the server terminal
process.stdin.on("data", (input) => {
  socketLists.forEach((s, i) => {
    s.write(input);
  });
});

//  TCP server
const server = net.createServer((socket) => {

  //  newly connected client to the socket list
  socketLists.push(socket);

  //  incoming messages from clients
  socket.on("data", (chunk) => {
    currentClientIp = socket.remoteAddress;

    console.log(chunk.toString());

    // Send acknowledgment to the sender
    socket.write("server: message received");

    //  message to other connected clients
    socketLists.forEach((s, i) => {
      if (s.remoteAddress !== currentClientIp) {
        s.write(chunk);
      }
    });
  });

  //  client errors
  socket.on("error", () => {
    console.log("client left");
  });

  //  client disconnection
  socket.on("close", () => {
    console.log(socket.remoteAddress, ": client left");
  });

  //  new client connection
  console.log(socket.remoteAddress, ": client joined");
});

// Start TCP server
server.listen(1000, "0.0.0.0");


