import http from 'http'
const server = http.createServer((req,res)=>{
  res.write('krishna')
  res.end('hello world')
})

server.listen(2000,'0.0.0.0',()=>{
  console.log('server started on port 2000')
})