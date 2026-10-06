## for 1 byte characters
0xxxxxxx                  //0 placeholder

## for 2 byte characters
11xxxxxx 10xxxxxx          //11    10 placeholder max we use 12bits
11000010 10000001

11000010 10101001        =A9
1010 1001
1010 1001



11000010 10101110   = ®/AE
1010 1110
1010 1110


11001001 10011000  = ɘ/0258
0010 0101 1000
0010 0101 1000


## for 3 byte characters
If a Unicode character is encoded using 3 bytes in UTF-8, its structure is:
1110xxxx 10xxxxxx 10xxxxxx = 16bits

100000000000  = 800hex = ࠀ







## for 4 byte characters
11110xxx 10xxxxxx 10xxxxxx 10xxxxxx  = 21bits

0001 0000 0000 0000 0000 = 𐀀/10000-hex
00010000000000000000
00010000000000000000


11110000 10011111 10011000 10000111 = 😇

00011111011000000111 
00011111011000000111

100100000101 = अ
100100000101
100100000101

















