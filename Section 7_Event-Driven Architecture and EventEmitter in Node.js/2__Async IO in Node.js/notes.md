- Synchronous I/O: The main JavaScript thread waits for the operation to finish.
- Asynchronous I/O: The main JavaScript thread can execute other work while the I/O operation is pending.
- Why Node.js uses it: To handle many I/O-bound tasks efficiently without unnecessarily blocking JavaScript execution.

> The key idea: Don't keep the JavaScript main thread waiting when it could be doing useful work.