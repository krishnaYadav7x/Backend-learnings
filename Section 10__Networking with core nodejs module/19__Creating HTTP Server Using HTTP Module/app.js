import http from "node:http";

// HTTP SERVER
// Definition: Creates an HTTP server that handles incoming HTTP requests.
const server = http.createServer((request, response) => {
  // REQUEST OBJECT
  // Definition: A Readable Stream representing the incoming HTTP request.

  console.log("got request");

  // REQUEST URL
  // Definition: Returns the URL path requested by the client.
  console.log(request.url);

  // REQUEST METHOD
  // Definition: Returns the HTTP method (GET, POST, PUT, DELETE).
  console.log(request.method);

  // REQUEST HEADERS
  // Definition: Contains headers sent by the client.
  console.log(request.headers);

  // RESPONSE HEADERS
  // Definition: Sets HTTP headers that will be sent to the client.
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Content-Length", "5");

  // RESPONSE BODY
  // Definition: Writes data into the HTTP response body.
  response.write("hello from http server");

  // RESPONSE END
  // Definition: Finishes the HTTP response and signals that no more data will be sent.
  // response.end();

  // REQUEST DATA EVENT
  // Definition: Receives chunks of data from the incoming request body.
  request.on("data", (chunk) => {
    console.log(chunk.toString());
    console.log("got req data");
  });
});

// SERVER LISTENING
// Definition: Starts the HTTP server and listens for incoming connections.
server.listen(4000, "0.0.0.0", () => {
  console.log("server listening on port 4000");
});
