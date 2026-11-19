# CORS (Cross-Origin Resource Sharing)

- CORS is a browser security mechanism that controls cross-origin requests.
- It allows the server to specify which origins are permitted to access its resources.

## Why CORS Errors Occur
- When the browser sends a cross-origin request, it checks whether the server permits it.
- If the required permissions are missing, the browser blocks access to the response.

## Simple Requests
- Methods: `GET`, `HEAD`, `POST`
- Uses CORS-safelisted headers.
- `Content-Type` allowed:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`
- Does not trigger a preflight request.

## Non-Simple Requests
Requests trigger a preflight check when they use:
- Methods like `PUT`, `PATCH`, `DELETE`.
- Non-safelisted headers like `Authorization`.
- `Content-Type: application/json`.

## Preflight Request
- Browser automatically sends an `OPTIONS` request before the actual request.
- Checks whether the server allows the requested origin, method, and headers.
- If permission is granted, the browser sends the actual request.

## Important
- CORS is enforced by the browser, not Node.js.
- Simple requests also require valid CORS response headers.
- CORS is not authentication or authorization.
- Postman and curl are not restricted by browser CORS policies.