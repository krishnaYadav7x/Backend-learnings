1. pipe() method

- The pipe() method connects a Readable Stream to a Writable Stream, allowing data to flow automatically from the source to the destination.

- It also handles backpressure automatically.

**readStream reads data in chunks.**
**pipe() passes those chunks to writeStream.**
**If the Writable Stream cannot process data quickly enough, pipe() manages backpressure.**
**When reading finishes normally, pipe() calls writeStream.end() by default.**

- In simple words: pipe() automatically transfers data from a Readable Stream to a Writable Stream.

2. unpipe() method

**The unpipe() method disconnects a Readable Stream from a Writable Stream, stopping data from flowing through that connection.**