Node.js Buffer Pool — Complete Notes
1. What is a Buffer Pool?
A Buffer pool is a pre-allocated memory region used by Node.js to allocate small Buffers efficiently.
It reduces allocation overhead by allowing multiple Buffers to use portions of the same underlying memory.
Ultimately, this memory is backed by memory managed by the operating system.
2. Buffer Pool Size
Buffer.poolSize; // 8192 bytes by default (8 KiB)
Buffer.poolSize specifies the pool size for new pool allocations.
It does not represent the maximum Buffer size.
Changing Buffer.poolSize does not resize an existing pool.
3. When does Buffer.allocUnsafe() use the pool?
It uses the pool when size < Buffer.poolSize / 2.
Default threshold: 8192 / 2 = 4096 bytes.
Allocation	Uses pool?
Buffer.allocUnsafe(4)	Yes
Buffer.allocUnsafe(4095)	Yes
Buffer.allocUnsafe(4096)	No
Buffer.allocUnsafe(5000)	No
4. Which Buffer methods can use the pool?
Buffer.allocUnsafe(size) — for eligible small allocations.
Buffer.from(string) — for eligible small allocations.
Buffer.from(array) — for eligible small allocations.
Buffer.concat(list) — its resulting Buffer can use the pool if its total size is eligible.
Buffer.alloc(size) — does not use the pool.
Buffer.allocUnsafeSlow(size) — does not use the pool.
Buffer.from(arrayBuffer) — shares the existing ArrayBuffer memory rather than allocating a new pooled backing store.
5. What happens when the pool runs out of space?
Node.js can allocate a new pool.
Existing Buffers continue referencing their original memory.
New eligible allocations can use the new pool.
6. Do Buffers share the same memory?
Multiple small pooled Buffers can share the same underlying ArrayBuffer.
Each Buffer has its own byteOffset and byteLength.
Sharing a pool does not mean the Buffers occupy the same bytes.
const a = Buffer.allocUnsafe(4);
const b = Buffer.allocUnsafe(8);

console.log(a.buffer === b.buffer);

This can return true if both Buffers use the same pool.

7. How to find a Buffer's memory position
console.log(b.byteOffset);
console.log(b.byteLength);
console.log(b.buffer.byteLength);
byteOffset → where the Buffer starts in its underlying ArrayBuffer.
byteLength → how many bytes the Buffer can access.
buffer.byteLength → size of the underlying ArrayBuffer.

Formula:

Underlying memory position = byteOffset + Buffer index

8. Buffer.from() — Copy vs. Shared Memory
const a = Buffer.from('hello');

const b = Buffer.from(a);
const c = Buffer.from(a.buffer);
Buffer.from(a) → copies the bytes into a new Buffer.
Buffer.from(a.buffer) → shares the underlying ArrayBuffer memory.
9. Buffer.allocUnsafe() — Important
It does not initialize its allocated bytes to zero.
The bytes may contain old data, so initialize the Buffer before reading or exposing its contents.
It can be faster than Buffer.alloc() because it skips zero-initialization.
10. Buffer Pool vs. Maximum Length
Property	Meaning
Buffer.poolSize	Pool size for new pool allocations
buffer.byteLength	Length of a particular Buffer
buffer.buffer.byteLength	Size of its underlying ArrayBuffer
buffer.constants.MAX_LENGTH	Maximum supported Buffer length
buffer.constants.MAX_STRING_LENGTH	Maximum supported string length
Final Summary

Buffer pool = shared memory region for efficient small Buffer allocations.

Remember these four points:

Default pool size: 8192 bytes.
Pool threshold: less than half the pool size.
Multiple small Buffers can share one underlying ArrayBuffer.
Each Buffer accesses its own region using byteOffset and byteLength.