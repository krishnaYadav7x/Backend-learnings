##  What is a Data Stream?

**A data stream is a continuous flow or sequence of data that can be processed incrementally, rather than requiring all the data to be available at once.**

## Yes! ✅ 0, 1, and 2 are file descriptors (FDs).

**In Node.js, these three standard file descriptors are:**

- FD	Name	Node.js API
- 0	Standard Input	process.stdin
- 1	Standard Output	process.stdout
- 2	Standard Error	process.stderr
- What is a file descriptor?

- A file descriptor is a small, non-negative integer that an operating system uses to identify an open file or I/O resource associated with a process.





| Feature                   | `stdin`         | `stdout`           | `stderr`                     |
| ------------------------- | --------------- | ------------------ | ---------------------------- |
| Full name                 | Standard Input  | Standard Output    | Standard Error               |
| FD number                 | `0`             | `1`                | `2`                          |
| Main purpose              | Receive input   | Send normal output | Send error/diagnostic output |
| Node.js API               | `process.stdin` | `process.stdout`   | `process.stderr`             |
| Common stream type        | Readable        | Writable           | Writable                     |
| Default terminal behavior | Reads input     | Displays output    | Displays errors              |








