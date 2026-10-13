1. CPU Operation vs I/O Operation
##  CPU Operation (Processing Data)

> A CPU operation is work that requires the processor to execute instructions and perform calculations.

* Examples:

- Mathematical calculations
- Prime number checking
- Sorting a large array
- Processing large amounts of data
- Compressing or encrypting data

* Key point: The CPU is actively processing instructions. A large CPU-intensive task can block JavaScript execution on Node.js's main thread.
##  I/O Operation (Input/Output)

> An I/O operation involves transferring data between your program and an external resource.

* Examples:

- Reading a file from an SSD or HDD
- Writing data to a file
- Fetching data from a server using HTTP
- Querying a database
- Receiving data through a network connection



| Feature                                      | CPU Operation                                                  | I/O Operation                                     |
| -------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| Main work                                    | Processing and calculations                                    | Reading, writing, or transferring data            |
| Primary resource                             | CPU                                                            | Storage, network, or another I/O device           |
| Typical example                              | Calculating prime numbers                                      | Reading a file                                    |
| Does it involve waiting?                     | Usually, the CPU actively executes instructions                | Often, the program waits for an external resource |
| Can Node.js handle other work while waiting? | Not if synchronous CPU-heavy JavaScript blocks the main thread | Usually, with asynchronous I/O                    |
| Node.js example                              | A large loop                                                   | `fs.readFile()`                                   |








