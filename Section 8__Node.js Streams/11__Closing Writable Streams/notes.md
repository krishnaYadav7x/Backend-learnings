.end() tells the Writable Stream that no more data will be written.
It allows the stream to finish processing any remaining data in its buffer.
The 'finish' event fires when all data has been processed by the Writable Stream.

Remember: Always call .end() when you've finished writing data to ensure the stream finishes properly.