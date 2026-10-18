## file descriptor it is a non negative integer which os uses to identify an open file or i/o resource associated with process

- fs.read() Method
- fd2: File descriptor of the opened file.
- buffer: Buffer where the data read from the file will be stored.
- position: 5: Start reading from byte position 5 in the file.
- offset: 3: Start writing the read data at index 3 in the buffer.
- length: Number of bytes to read. (Not specified in your code.)
- callback: Executes when the read operation completes.
- Callback Parameters
- err: Contains the error if the operation fails; otherwise, null.
- bytesRead: Number of bytes actually read from the file.
- buffData: The buffer containing the read data.
- Important Points
- fs.read() reads data from a file into a buffer.
- position specifies where to start reading in the file.
- offset specifies where to start writing in the buffer.
- buffData.toString() converts the buffer's contents into a string.
- Your code is missing length, which is required when using the options-object form of fs.read().

**--------------------------------------**

3. When is a file descriptor useful?
- Multiple operations: Keep a file open while performing multiple reads or writes.
- Precise control: Read or write at specific positions in a file.
- Performance: Avoid repeated open/close overhead when performing many operations.
- Low-level I/O: Work directly with file operations rather than using higher-level convenience methods.

