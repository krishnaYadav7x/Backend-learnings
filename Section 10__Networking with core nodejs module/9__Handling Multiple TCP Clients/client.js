import net from "node:net";

//  TCP client connection
const socket = net.createConnection({
  host: "10.253.238.185",
  port: 1000
});

//  incoming messages from the server
socket.on("data", (chunk) => {
  console.log(chunk.toString());
});

//  terminal input and send messages to the server
process.stdin.on("data", (input) => {
  socket.write(input);
});

//  connection errors
socket.on("error", () => {
  console.log("error on server");
});

//  server disconnection
socket.on("close", () => {
  console.log("server closed");
});


