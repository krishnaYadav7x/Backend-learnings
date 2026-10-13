## Why do we need Base64?

- Base64 converts binary bytes into text using a limited set of ASCII characters.

- It is useful when binary data (such as an image, audio, or video) must be embedded or transferred through a text-based format, such as a Data URL or JSON field.

- Important: Base64 is an encoding, not encryption or compression. It increases the data size by roughly 33%.

## Convert a file to Base64

- import fs from 'node:fs/promises';
- const buffer = await fs.readFile('video.mp4');
- const base64 = buffer.toString('base64');
- console.log(base64);



- readFile() without an encoding returns a Buffer containing the file's bytes.
- toString('base64') encodes those bytes as Base64 text.
- Decode Base64 back to bytes



const buffer = Buffer.from(base64, 'base64');
await fs.writeFile('restored.mp4', buffer);

Buffer.from(base64, 'base64') decodes the Base64 text into bytes. Writing that Buffer restores the file, provided the Base64 data is intact.

## Data URL format

- data:video/mp4;base64,BASE64_DATA_HERE

- The part before the comma describes the media type and encoding. The part after the comma contains the Base64 data.

## Mistakes to avoid

Reading binary files as UTF-8

const data = await fs.readFile('video.mp4', 'utf-8');

This decodes the bytes as text. Arbitrary video bytes are not necessarily valid UTF-8, so the original bytes may be changed or lost. Read binary files without an encoding:

const data = await fs.readFile('video.mp4');

Confusing a Buffer with binary text
A Buffer stores byte values in memory; it does not store a string of 0s and 1s. The same byte can be displayed in binary, decimal, or hexadecimal.

Assuming decimal byte values are always ASCII
Decimal is just a way to display numbers. ASCII assigns character codes to values 0–127; arbitrary binary bytes do not necessarily represent ASCII characters.

Expecting Base64 to encrypt or compress data
Base64 is reversible encoding, not security. Anyone with the encoded text can decode it.

Using the wrong API for await
Use node:fs/promises with await, or use fs.promises.readFile():

import fs from 'node:fs/promises';
const data = await fs.readFile('video.mp4');

The callback-based readFile from node:fs needs a callback.

Mental model

File on storage → bytes read into a Buffer → Base64 text (if needed) → decode to a Buffer → write bytes back to a file.