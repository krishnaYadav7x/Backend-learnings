# Understanding CORS Headers

## 1. `Access-Control-Allow-Origin`

- **Purpose:** Controls which websites (origins) are allowed to access server resources through browser JavaScript.
- It is part of the CORS (Cross-Origin Resource Sharing) mechanism.
- If this header is missing or does not allow the requesting origin, the browser blocks JavaScript from accessing the cross-origin response.

**Example:**
```http
Access-Control-Allow-Origin: *
```
- `*` means any origin is allowed (subject to CORS restrictions).

## 2. `Access-Control-Expose-Headers`

- **Purpose:** Allows browser JavaScript to access additional HTTP response headers.
- By default, JavaScript can access only certain CORS-safelisted response headers.
- To read custom response headers, the server must expose them.

**Example:**
```http
Access-Control-Expose-Headers: name
```

Now JavaScript can access the custom header:

```js
const response = await fetch("http://10.253.238.185:1000/");

console.log(response.headers.get("name"));
```

- Without exposing the `name` header, JavaScript cannot read it through Fetch API in a cross-origin response.

## 3. What Happens If We Don't Use These Headers?

| Header | If Not Provided |
|---|---|
| `Access-Control-Allow-Origin` | Browser JavaScript cannot access the cross-origin response. |
| `Access-Control-Expose-Headers` | JavaScript cannot access custom response headers. |

## 4. Real-World Example

Suppose:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:1000`

Your React application calls the backend using `fetch()`.

- `Access-Control-Allow-Origin` allows your frontend to access the backend response.
- `Access-Control-Expose-Headers` allows your frontend to read additional response headers.

## 5. Remember

- **Allow-Origin** → Permission to access the cross-origin response.
- **Expose-Headers** → Permission to read additional response headers.
- These restrictions apply to browser JavaScript, not ordinary Node.js HTTP clients.