# TCP vs UDP – Networking Notes

## 1. TCP (Transmission Control Protocol)

* TCP is a **connection-oriented protocol**.
* It focuses on reliable data delivery.
* Ensures data reaches the destination correctly and in the correct order.
* If data is lost during transmission, TCP retransmits it.
* Establishes a connection using a **Three-Way Handshake** before data transmission.

**Advantages:**

* Reliable data transmission.
* Ensures data arrives in the correct order.
* Detects lost data and retransmits it.

**Disadvantages:**

* Slower than UDP in many situations.
* More communication overhead.
* Requires connection establishment.

**Protocols that commonly use TCP:**

* HTTP/1.1 and HTTP/2
* HTTPS (HTTP/1.1 and HTTP/2)
* FTP
* SMTP
* SSH

## 2. UDP (User Datagram Protocol)

* UDP is a **connectionless protocol**.
* It focuses on speed and low communication overhead.
* Does not guarantee data delivery.
* Does not retransmit lost packets automatically.
* Does not guarantee that data arrives in the correct order.

**Advantages:**

* Faster communication in many situations.
* Low overhead.
* No connection establishment required.
* Useful for real-time communication.

**Disadvantages:**

* Data packets can be lost.
* No guaranteed delivery.
* No guaranteed packet ordering.
* Applications must handle reliability themselves if required.

**Protocols and applications that commonly use UDP:**

* DNS (usually UDP).
* DHCP.
* VoIP.
* Online multiplayer gaming.
* Live audio and video communication.
* HTTP/3 (uses QUIC over UDP).

## 3. TCP vs UDP – Quick Comparison

| TCP                      | UDP                         |
| ------------------------ | --------------------------- |
| Connection-oriented      | Connectionless              |
| Reliable delivery        | No delivery guarantee       |
| Retransmits lost data    | No automatic retransmission |
| Maintains data order     | No ordering guarantee       |
| More overhead            | Less overhead               |
| Generally higher latency | Generally lower latency     |
| Focuses on reliability   | Focuses on low latency      |

## 4. Real-World Examples

**TCP:**

* Downloading a file.
* Sending emails.
* Loading websites using HTTP/1.1 or HTTP/2.
* SSH remote connections.

**UDP:**

* Online gaming.
* Video calls.
* Live streaming.
* DNS queries.

## 5. Remember

* TCP = Reliability + Correct order + Retransmission.
* UDP = Speed + Low overhead + No delivery guarantee.
* TCP and UDP both work at the **Transport Layer**.
* Both use port numbers to identify applications.
* TCP does not provide encryption by itself. HTTPS uses TLS for encryption.
* UDP does not mean data will always be lost; it means delivery is not guaranteed by UDP.
