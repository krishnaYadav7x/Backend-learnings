Character Sets vs Character Encodings (ASCII and Unicode)

🔤 Character Sets vs Character Encodings

A character set is a collection of characters and the codes assigned to them. For example, ASCII assigns a code to characters like A, B, a, 0, etc., while Unicode provides codes for characters from almost every writing system, including A, अ, 中, and 😊. A character encoding, on the other hand, defines how those character codes are converted into bytes so a computer can store or transfer them. Common encodings include UTF-8, UTF-16, and UTF-32.

Example 1 — ASCII

Suppose you write:

A

ASCII defines:

A → 65

65 in binary is:

01000001

So conceptually:

A - ASCII code: 65  - Binary: 01000001





Here, ASCII is the character set/code system, and the binary/byte representation is what the computer stores or transfers.

Example 2 — Unicode + UTF-8

Suppose you write:

😊

Unicode assigns it the code point:

U+1F60A

Then UTF-8 encodes that Unicode code point into bytes:



Unicode → tells us WHAT character it is
UTF-8   → tells us HOW to represent it as bytes


Remember:

Character set = “What characters and codes exist?”
Character encoding = “How are those codes represented as bytes?”