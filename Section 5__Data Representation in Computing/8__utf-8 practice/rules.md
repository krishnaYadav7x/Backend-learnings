## UTF-8: 1-byte structure

For a character that uses 1 byte, UTF-8 uses this structure:

0xxxxxxx
Total = 8 bits = 1 byte
The first bit is always 0
Remaining 7 bits store the actual Unicode code point value.

## ranges

| Bytes       | UTF-8 structure                       | Range               |
| ----------- | ------------------------------------- | ------------------- |
| **1 byte**  | `0xxxxxxx`                            | **0–127**           |
| **2 bytes** | `110xxxxx 10xxxxxx`                   | **128–2047**        |
| **3 bytes** | `1110xxxx 10xxxxxx 10xxxxxx`          | **2048–65535**      |
| **4 bytes** | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` | **65536–1,114,111** |


## UTF-8: 2-byte structure

* 110xxxxx 10xxxxxx

11000010 10000001    = /81-hex


10000001
10000001
Last 2 bytes = ߿

11011111 10111111    = ߿
11111111111


* Max = 111 1111 1111 

## UTF-8: 3-byte structure

* 1110xxxx 10xxxxxx 10xxxxxx


1000 0000 0000

1000 0000 0000 

* Max = 1111 111111 111111  in decimal 2**(24-8) 8 prefixes

1111111111111111


## UTF-8: 4-byte structure
* 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

10000000000000000  first 4 byte character 2**16-1 = 65535 its decimal form


 
 000011111011000010001   










