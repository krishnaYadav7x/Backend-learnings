const http = require("http");

const server = http.createServer((req, res) => {
  const data = {
    message: "Hello World hello",
  };

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
});

server.listen(() => {
  console.log(server.address());
  console.log("Server running on port 4000");
});
