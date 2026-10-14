

## What problem do Streams solve?

>Streams process data in small chunks instead of loading the entire file into memory at once.
Instead of loading the entire 4 GB video into RAM, Node.js reads smaller chunks into Buffers and processes them as they arrive.

* For example:

- Video size: 4 GB
- Chunk size: 64 KB
- Node.js processes the chunks incrementally.

- This significantly reduces memory usage.

>Without streams:

- Read the entire file into memory
- Write the entire file to the destination
- Potentially consume a huge amount of RAM.