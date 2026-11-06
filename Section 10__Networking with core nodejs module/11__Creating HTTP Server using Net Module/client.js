import net from "node:net";
const socket = net.createConnection({ host: "10.253.238.185" ,port:1000});

socket.on('data',(chunk)=>{
  console.log(chunk.toString())
})



 socket.on("error", () => {
   console.log("error occur");
 });