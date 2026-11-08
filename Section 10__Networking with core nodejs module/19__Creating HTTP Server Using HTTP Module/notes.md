| TCP (`net`) | HTTP (`http`) |
|---|---|
| `net.createServer()` | `http.createServer()` |
| `connection` event | `request` event |
| `socket` object | `request` and `response` objects |
| Duplex Stream | Request: Readable Stream |
| | Response: Writable Stream |
| Manually handles incoming data | Node.js parses HTTP requests |
| Manually constructs HTTP headers | Uses `response.setHeader()` |