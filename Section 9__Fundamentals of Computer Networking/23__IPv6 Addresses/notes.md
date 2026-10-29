# IPv6 Addresses

* IPv6 stands for **Internet Protocol Version 6**.
* It is the newer version of the Internet Protocol, developed to overcome the shortage of IPv4 addresses.
* An IP address identifies a network interface so that devices can communicate over a network.
* IPv6 addresses are 128 bits long.
* Internet Service Providers (ISPs) can assign IPv6 addresses to their customers.
* IPv6 supports a vastly larger number of addresses than IPv4.

## 1. Why Do We Need IPv6?

* IPv4 uses 32-bit addresses, providing approximately 4.3 billion possible addresses.
* The number of internet-connected devices has grown significantly.
* IPv4 addresses became scarce.
* NAT and CGNAT help conserve IPv4 addresses, but they do not eliminate the underlying shortage.
* IPv6 provides a much larger address space, reducing the need to share public IP addresses through NAT.

## 2. Structure of an IPv6 Address

* An IPv6 address contains **128 bits**.
* It is represented using hexadecimal notation.
* Each hexadecimal digit represents 4 bits.
* Therefore, 128 bits ÷ 4 bits = **32 hexadecimal digits**.
* An IPv6 address is divided into eight groups, called *hextets*.
* Each hextet contains 16 bits, represented by four hexadecimal digits.
* Colons (`:`) separate the eight hextets.

Example:

`2001:0db8:0000:0000:0000:ff00:0042:8329`

Each group contains four hexadecimal digits.

* `2001` → 16 bits
* `0db8` → 16 bits
* `0000` → 16 bits
* `0000` → 16 bits
* `0000` → 16 bits
* `ff00` → 16 bits
* `0042` → 16 bits
* `8329` → 16 bits

Total = 8 × 16 = **128 bits**.

### Hexadecimal Digits

Hexadecimal uses 16 symbols:

`0 1 2 3 4 5 6 7 8 9 a b c d e f`

The letters represent these decimal values:

* `a` = 10
* `b` = 11
* `c` = 12
* `d` = 13
* `e` = 14
* `f` = 15

Each hexadecimal digit represents four binary bits.

Examples:

* `0` = `0000`
* `1` = `0001`
* `a` = `1010`
* `f` = `1111`

For example:

`2001`

* `2` = 4 bits
* `0` = 4 bits
* `0` = 4 bits
* `1` = 4 bits

Total = 16 bits.

## 3. Rules for Shortening IPv6 Addresses

IPv6 addresses can contain many zeros, so two rules allow us to write them in a shorter form.

### Rule 1: Remove Leading Zeros

* You can remove zeros at the beginning of each hextet.
* You cannot remove zeros from the middle or end of a hextet.
* A hextet containing only zeros can be written as `0`.

Example:

Original:

`2001:0db8:0000:0042:0000:0000:0000:0001`

After removing leading zeros:

`2001:db8:0:42:0:0:0:1`

Both represent the same IPv6 address.

**Important:** Remove leading zeros separately from each hextet.

For example:

* `0042` becomes `42`.
* `000a` becomes `a`.
* `1000` remains `1000`.
* `0000` becomes `0`.

### Rule 2: Replace Consecutive Zero Hextets with `::`

* If an IPv6 address contains consecutive hextets consisting entirely of zeros, they can be compressed into `::`.
* The double colon can replace one or more consecutive zero hextets.
* You can use `::` **only once in a single IPv6 address**.

Example:

Original:

`2001:0db8:0000:0000:0000:ff00:0042:8329`

Remove leading zeros:

`2001:db8:0:0:0:ff00:42:8329`

Compress the consecutive zero hextets:

`2001:db8::ff00:42:8329`

All three addresses represent the same 128-bit address.

### Why Can We Use `::` Only Once?

The double colon means that one or more complete zero hextets have been omitted.

Consider:

`2001::1`

There are eight hextets in a complete IPv6 address.

The written address contains two hextets: `2001` and `1`.

Therefore, `::` represents six omitted zero hextets.

Expanded form:

`2001:0000:0000:0000:0000:0000:0000:0001`

Now consider:

`2001::abcd::1`

This is invalid because there are two double colons. We cannot determine how many zero hextets each double colon represents.

**Remember:**

* One IPv6 address can contain at most one `::`.
* A single `0` represents one zero hextet.
* A double colon (`::`) represents one or more consecutive zero hextets.

## 4. How to Expand a Short IPv6 Address

Suppose you see:

`2001:db8::1`

Follow these steps:

**Step 1:** Count the existing hextets.

`2001`, `db8`, `1`

There are three hextets.

**Step 2:** Calculate the missing hextets.

8 − 3 = 5 missing hextets.

**Step 3:** Replace `::` with five zero hextets.

Expanded address:

`2001:0db8:0000:0000:0000:0000:0000:0001`

**Step 4:** Confirm the length.

* Eight hextets
* Four hexadecimal digits per hextet when fully expanded
* 32 hexadecimal digits in total
* 128 bits

### What If an IPv6 Address Looks Shorter Than 128 Bits?

An IPv6 address may look shorter because leading zeros have been removed or zero hextets have been compressed.

However, **its actual length is still 128 bits**.

For example:

`::1`

This is the IPv6 loopback address.

Its expanded form is:

`0000:0000:0000:0000:0000:0000:0000:0001`

It still contains 128 bits.

### What If an Address Appears to Contain Only 30 Bits?

A valid IPv6 address cannot be only 30 bits long.

If you see an IPv6 address with fewer than 128 bits written explicitly, check whether it uses the shortening rules.

* Leading zeros might have been removed.
* Zero hextets might have been replaced with `::`.
* If neither rule explains the address, it might be incomplete or invalid.

A shortened IPv6 address represents the same full 128-bit address; it does not become a shorter IP address.

---
# Why My Teacher Can Access His IPv6 Server but I Cannot

### 1. My Teacher's Network (Home Router)

* His laptop receives a global IPv6 address through IPv6 configuration provided by his network.
* He starts a Node.js server on his laptop.
* His router's IPv6 firewall initially blocks incoming connections.
* He changes the router's firewall settings to allow incoming connections to his server.
* His phone can then access the server using the laptop's global IPv6 address, provided the phone has IPv6 connectivity.

### 2. My Network (Mobile Hotspot)

* My laptop receives IPv6 configuration through my mobile hotspot and mobile carrier's network.
* My Node.js server listens on port `4000`.
* I can access the server locally using my laptop's IPv6 loopback address, `::1`.
* However, I cannot access it from my phone using my laptop's global IPv6 address.
* Possible reasons include Windows Firewall, mobile carrier filtering, hotspot configuration, or IPv6 routing issues.

### 3. The Main Difference

* **My teacher:** Can configure his home router's IPv6 firewall to permit incoming connections.
* **Me:** My mobile carrier and hotspot control much of the network configuration, and I may not have the same control over incoming connections.

### 4. Important Conclusion

* A global IPv6 address does not automatically make a server accessible from anywhere.
* The server must listen on the correct interface and port.
* The operating system firewall must allow incoming connections.
* IPv6 routing must work, and the network must not block the connection.
* My ISP might be restricting incoming connections, but I need to test this before concluding that it is the cause.

---
# IPv4 vs IPv6 Configuration on Devices

### 1. IPv4 Only

* The device uses IPv4 to communicate over the network.
* It can access websites and servers that are reachable through IPv4.
* It cannot directly communicate with an IPv6-only server using IPv4 alone.
* It can still access an IPv6-only service if a translation mechanism, such as DNS64/NAT64, is available.

### 2. IPv6 Only

* The device uses IPv6 to communicate over the network.
* It can access websites and servers that are reachable through IPv6.
* It cannot directly communicate with an IPv4-only server using IPv6 alone.
* It can access IPv4-only services if a suitable translation mechanism is available.

### 3. Dual Stack (IPv4 + IPv6)

* The device supports both IPv4 and IPv6.
* It can communicate with IPv4 and IPv6 servers, depending on network connectivity.
* DNS can return IPv4 addresses (A records) and IPv6 addresses (AAAA records).
* The device can choose an appropriate address and connection method based on availability and operating-system behavior.

### 4. What Happens When You Open a Website?

Suppose a website supports both IPv4 and IPv6.

* An IPv4-only device connects using IPv4.
* An IPv6-only device connects using IPv6.
* A dual-stack device can use either protocol, depending on DNS results, network connectivity, and connection-selection behavior.

### 5. Important Things to Remember

* IPv4 and IPv6 are different network-layer protocols.
* An IPv4 address cannot directly replace an IPv6 address, or vice versa.
* IPv4-only devices cannot directly communicate with IPv6-only servers without a translation or gateway mechanism.
* IPv6-only devices face the equivalent limitation with IPv4-only servers.
* Supporting both protocols provides the broadest compatibility, provided the network supports both.
* Selecting IPv4 or IPv6 in a device's settings does not automatically guarantee that the network provides working connectivity through that protocol.

**Website supports only IPv6 → An IPv4-only device cannot access it directly.**
**Website supports both IPv4 and IPv6 → An IPv4-only device can access it using IPv4.**