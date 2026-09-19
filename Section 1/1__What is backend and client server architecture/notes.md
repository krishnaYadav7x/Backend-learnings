## 1. What is a Client?

A client is the application/device that sends a request to a server and interacts with the user.

In web development, the browser is usually the client.

For example:

You
 ↓
Chrome Browser
 ↓
React Application

The client is responsible for things like:

Showing the UI
Taking user input
Handling button clicks
Sending requests
Displaying the response


## 2. What is a Server?

A server is a program/computer that receives requests from clients, processes them, and sends responses back.

For example, your backend could be:

Node.js + Express

The server might have:

app.get("/api/products", (req, res) => {
  // get products from database

  res.json(products);
});

The server receives:

GET /api/products

Then it can:

Check the request
Run business logic
Get data from the database
Send data back



        REQUEST
Client ──────────────→ Server
                         │
                         │ Process
                         ↓
                      Database
                         │
                         ↓
        RESPONSE
Client ←────────────── Server














