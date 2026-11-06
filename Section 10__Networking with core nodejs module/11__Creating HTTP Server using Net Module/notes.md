# HTTP Server Using the `net` Module

## 1. TCP Server
- The `net` module is used to create TCP servers and clients.
- A socket represents a connection between the client and server.
- `socket.write()` sends data through the socket.

## 2. HTTP Request
- Browsers communicate with servers using HTTP requests.
- An HTTP request contains:
  - HTTP method (GET, POST, etc.)
  - HTTP version (HTTP/1.1)
  - Headers (Host, Connection, etc.)
  - Optional request body.

## 3. HTTP Response
- Browsers expect a properly formatted HTTP response.
- Sending plain text through `socket.write()` is not sufficient.
- An HTTP response contains:
  - **Status Line:** `HTTP/1.1 200 OK`
  - **Headers:** `Content-Type: text/plain`
  - **Blank Line:** `\r\n\r\n` separates headers from the body.
  - **Response Body:** Actual data sent to the browser.

## 4. Key Concepts
- The `net` module creates a raw TCP server, not an HTTP server.
- HTTP is an application-layer protocol that works over TCP.
- `socket.write()` sends raw data; it does not automatically format HTTP responses.
- HTTP messages follow a specific structure that browsers understand.
- The `http` module handles HTTP request and response formatting automatically.