🔥 Key Points

ArrayBuffer is a fixed-size block of memory.
Its size is specified in bytes.
new ArrayBuffer(8) → 8 bytes = 64 bits.
It stores raw binary data.
It does not automatically represent a file or text.
Use TypedArray or DataView to read/write the memory.
The same ArrayBuffer can have different views.
It is commonly used for binary data, files, network data, images, audio, and encoding.

ArrayBuffer = raw memory for binary data; TypedArray/DataView = the way we interpret and access that memory.