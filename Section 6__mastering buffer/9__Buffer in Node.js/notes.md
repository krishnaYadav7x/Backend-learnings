##  What is a Buffer in Node.js?

- A Buffer is a Node.js object used to work with binary data directly as a sequence of bytes.

1. Why do we need Buffers?
- Computers store and process data as bytes.
- When Node.js handles files, images, videos, network requests, or streams, it often needs to work with binary data.
- Buffers allow Node.js to read, store, modify, and transfer this data efficiently


| Feature           | `Buffer.alloc()`                           | `Buffer.allocUnsafe()`                                |
| ----------------- | ------------------------------------------ | ----------------------------------------------------- |
| Memory allocation | Allocates memory for the Buffer            | Allocates memory for the Buffer                       |
| Initialization    | Initializes all bytes to `0`               | Does not initialize all bytes to `0`                  |
| Initial values    | Always `0`                                 | May contain old data                                  |
| Performance       | Can be slower because it zero-fills memory | Can be faster because it skips zero-initialization    |
| Buffer pool       | Does not use the shared pool               | Can use the pool for eligible small allocations       |
| Security          | Safer for immediate reading                | Must initialize bytes before reading or exposing them |
| Use case          | When you need zero-initialized memory      | When you will overwrite the bytes before reading them |
