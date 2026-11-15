# Express.js Middleware

## 1. What is Middleware?
- Middleware is a function that executes during the request-response cycle.
- It has access to:
  - `req` → Request object.
  - `res` → Response object.
  - `next` → Function to pass control to the next middleware.
- Middleware can execute code, modify request/response objects, end the request-response cycle, or pass control to the next middleware.

- Express internally maintains middleware and route handlers in an array (stack).
- In Express, calling next() with a truthy argument (an error) transfers control to Error-Handling Middleware.

## 2. Middleware Function Syntax

```js
function middleware(req, res, next) {
  console.log("Middleware executed");

  next();
}