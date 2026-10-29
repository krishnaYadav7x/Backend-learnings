
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(JSON.stringify({ message: 'my name is krishna!!!' }));
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
  console.log(server.address());
});

