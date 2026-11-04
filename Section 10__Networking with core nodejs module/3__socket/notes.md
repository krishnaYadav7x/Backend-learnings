# UDP (User Datagram Protocol)

## What is a Socket?

* A socket is an endpoint of communication between two devices or processes over a network.
* It allows applications to send and receive data over a network.

## Advantages of UDP

1. **Fast Communication**

   * UDP has low overhead because it doesn't establish a connection before sending data.

2. **No Connection Establishment**

   * No TCP-style three-way handshake is required.

3. **Low Latency**

   * Suitable for applications where speed matters.

4. **Lightweight**

   * UDP has a small header (8 bytes).

5. **Broadcasting and Multicasting**

   * Supports sending data to multiple devices.

6. **No Retransmission Overhead**

   * UDP doesn't automatically retransmit lost packets.

## Disadvantages of UDP

1. **No Delivery Guarantee**

   * Packets can get lost.

2. **No Ordering Guarantee**

   * Packets may arrive in a different order.

3. **No Automatic Retransmission**

   * Lost packets are not automatically sent again.

4. **No Built-in Congestion Control**

   * Applications must handle congestion considerations themselves.

5. **No Built-in Flow Control**

   * The sender doesn't automatically adjust its speed according to the receiver.

6. **No Built-in Encryption**

   * UDP doesn't provide encryption by itself.
