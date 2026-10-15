## A Readable Stream (readStream) is an object that allows you to read data incrementally, in chunks, from a source such as a file.

        Video file on disk (2.28 GiB)
                    |
                    v
             Readable Stream
             (readStream)
                    |
                    v
          Reads data in chunks
                    |
                    v
             Buffer (100 MiB)
                    |
                    v
          Your data event callback
                    |
                    v
           Process or write data

| Term         | Meaning                                                |
| ------------ | ------------------------------------------------------ |
| `readStream` | The object responsible for reading data incrementally. |
| `Buffer`     | Holds the binary data read from the file in memory.    |
| `chunk`      | The piece of data delivered to your callback.          |
