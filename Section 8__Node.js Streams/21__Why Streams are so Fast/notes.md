Why are streams faster?
File opening: createWriteStream() generally opens the file once and keeps it open while writing. appendFileSync() may open and close the file for every call.
Buffering: Streams collect data in an internal buffer and write it efficiently.
16 KB: The default highWaterMark for a file's writable stream is 16 KB. It's a buffer threshold, not a fixed write size.
Less overhead: Streams avoid managing thousands of separate file operations.