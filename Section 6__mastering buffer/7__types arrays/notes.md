##  TypedArrays

* Int8Array
* Int16Array
* Int32Array
* BigInt64Array
 
 -

* Uint8Array
* Uint8ClampedArray
* Uint16Array
* Uint32Array
* BigUint64Array

-

* Float32Array
* Float64Array


##  What is a Typed Array in JavaScript?

- A Typed Array is a JavaScript object that lets you read and write binary data in a memory buffer using a specific data type, such as 8-bit integers, 16-bit integers, or 32-bit floating-point numbers.

- Since you're learning ArrayBuffer and DataView, let's connect these concepts. 👇

1. First, understand the relationship

JavaScript provides three related concepts:

## Concept	Purpose
- ArrayBuffer	Creates a fixed-size block of binary memory.
TypedArray	Reads and writes binary data using a specific type.
DataView	Reads and writes binary data with more control over data types and byte order.


| Code                      | Memory behavior                                 |
| ------------------------- | ----------------------------------------------- |
| `new Uint8Array(4)`       | Creates a new typed array with its own buffer   |
| `new Uint16Array(4)`      | Creates another typed array with its own buffer |
| `new Uint8Array(buffer)`  | Creates a view of an existing buffer            |
| `new Uint16Array(buffer)` | Creates another view of that same buffer        |
