
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!111');
});

server.listen(80, () => {
    console.log('Server is running on port 4000');
});

