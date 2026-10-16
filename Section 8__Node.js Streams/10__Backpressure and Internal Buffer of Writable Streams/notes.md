## Backpressure in Node.js Streams

**Backpressure is a mechanism that prevents a Writable Stream from being overwhelmed with data when it cannot process data as quickly as the Readable Stream produces it.**

1. Internal Buffer 

- A small storage area in RAM where the Writable Stream keeps data waiting to be written to a file.

2. Backpressure 

- When data comes in faster than the Writable Stream can handle it, we need to slow down the incoming data.



1. **`write()` returns `false`** → Pause reading temporarily.
2. **`'drain'` event fires** → The Writable Stream is ready for more data.
3. **Resume reading** → Continue sending data to the Writable Stream.