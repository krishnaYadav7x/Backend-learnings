import { Buffer } from "node:buffer";

// const nodeBuffer = Buffer.alloc(8)


// Allocates memory: Creates a Buffer with a length of 8 bytes.
// Initializes memory: All 8 bytes are initialized to 0.
// Stores bytes: Each position can hold a value from 0 to 255.
// Memory allocation: Buffer.alloc() uses a separate allocation rather than the shared Buffer pool.

// nodeBuffer[0] = 45
// nodeBuffer[1] = 45
// nodeBuffer[2] = 45
// nodeBuffer[3] = 45
// nodeBuffer[4] = 45
// nodeBuffer[5] = 45
// nodeBuffer[6] = 45
// nodeBuffer[7] = 45
// nodeBuffer[8] = 80

const nodeBuffer2 = Buffer.from('krishna')


console.log('end');