# Express.js

## 1. What is Express.js?
- Express.js is a lightweight web framework built on top of Node.js.
- Simplifies building web servers and REST APIs.
- Provides convenient methods for handling HTTP requests and responses.

## 2. Problems Express.js Solves

Without Express (using Node.js HTTP module):
- Manual URL and HTTP method checking.
- Manual routing.
- Manual request body parsing.
- Manual response handling.
- Repetitive HTTP server code.
- Difficult route organization.
- Manual error handling.

## 3. Important Features
- **Routing:** Handle different HTTP methods and URLs.
- **Middleware:** Execute functions during the request-response cycle.
- **Request Handling:** Easily access incoming request data.
- **Response Handling:** Send JSON, text, files, etc.
- **Error Handling:** Centralized error handling.
- **Static Files:** Serve HTML, CSS, images, etc.
- **URL Parameters:** Access dynamic URL values.
- **Query Parameters:** Access query strings.
- **Modular Routing:** Organize routes using Express Router.

## 4. Node.js HTTP vs Express.js

| Node.js HTTP | Express.js |
|---|---|
| Low-level HTTP module | Web framework |
| Manual routing | Built-in routing |
| Manual body parsing | Middleware |
| Manual response handling | Convenient response methods |
| More boilerplate | Less boilerplate |
| Manual organization | Structured application development |

## 5. Important Express Methods

| Method | Purpose |
|---|---|
| `express()` | Create Express application |
| `app.listen()` | Start server |
| `app.use()` | Register middleware |
| `app.get()` | Handle GET requests |
| `app.post()` | Handle POST requests |
| `app.patch()` | Handle PATCH requests |
| `app.delete()` | Handle DELETE requests |
| `express.json()` | Parse JSON request bodies |
| `express.static()` | Serve static files |
| `express.Router()` | Create modular routers |

## 6. Important Concepts to Learn

1. Express installation and setup.
2. Routing.
3. Request and Response objects.
4. Middleware.
5. Built-in middleware.
6. Third-party middleware.
7. Route parameters (`req.params`).
8. Query parameters (`req.query`).
9. Request body (`req.body`).
10. Serving static files.
11. Error-handling middleware.
12. Express Router.
13. HTTP status codes.
14. REST API development.
15. Centralized error handling.
16. MVC pattern.

## 7. Key Takeaway
- Node.js provides the underlying server capabilities.
- Express simplifies server development through routing, middleware, and convenient request/response handling.
- Express does not replace Node.js; it is built on top of it.