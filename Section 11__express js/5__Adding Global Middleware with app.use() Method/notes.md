# Global Middleware in Express.js

### 1. What is Global Middleware?
- Middleware registered using `app.use()`.
- Executes for every incoming request (unless restricted by a path or condition).
- Can access `req`, `res` and `next`.
- Executes before the route handler if registered before the route.

### 2. Use Cases of Global Middleware

1. **Request Logging**
   - Log incoming request details.
   - Track URL, HTTP method and request time.
   - Useful for debugging and monitoring server activity.

2. **Authentication & Authorization**
   - Verify user authentication tokens.
   - Check user permissions.
   - Prevent unauthorized access to protected resources.

3. **Body Parsing**
   - Parse incoming JSON request bodies.
   - Make request data accessible through `req.body`.
   - Example: `express.json()`.

4. **Request Processing**
   - Add common properties to the request object.
   - Perform common operations before reaching route handlers.

5. **Response Headers**
   - Set common HTTP response headers.
   - Maintain consistent response configuration across routes.

6. **Performance Monitoring**
   - Measure request processing time.
   - Identify slow API endpoints.
   - Monitor server performance.

### 3. Importance of Global Middleware
- **Code Reusability:** Avoid writing the same logic in multiple routes.
- **Centralized Processing:** Handle common request operations in one place.
- **Maintainability:** Easier to update and manage common logic.
- **Consistency:** Apply common rules across multiple routes.
- **Monitoring:** Track and debug incoming requests.

### 4. Middleware Execution Flow
- Express executes middleware in the order they are registered.
- `next()` passes control to the next middleware.
- Without calling `next()`, execution does not continue to the next middleware or route handler.
- Middleware can also send a response and terminate the request-response cycle.
- Middleware registered after a route will not execute for requests already handled by that route.

### 5. Global Middleware vs Route-Specific Middleware
- **Global Middleware:** Applies common logic to all incoming requests.
- **Route-Specific Middleware:** Applies logic only to selected routes.
- Use global middleware for common operations.
- Use route-specific middleware for particular requirements, such as checking admin permissions.