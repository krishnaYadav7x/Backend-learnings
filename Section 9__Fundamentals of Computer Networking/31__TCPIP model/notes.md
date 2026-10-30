# TCP/IP Model – Networking Notes

## 1. What is the TCP/IP Model?

* TCP/IP stands for **Transmission Control Protocol / Internet Protocol**.
* It is a practical networking model that explains how devices communicate over the Internet and other networks.
* It consists of **4 layers**.
* Each layer has specific responsibilities in network communication.
* It is based on the protocols used to transmit and receive data across networks.

## 2. Why Do We Learn the TCP/IP Model?

* To understand how the Internet works.
* To understand how devices communicate with each other.
* To understand how data travels from sender to receiver.
* To understand the responsibilities of TCP, UDP, IP, HTTP and other protocols.
* To understand encapsulation and decapsulation.
* To troubleshoot network communication problems.

## 3. Four Layers of the TCP/IP Model

| Layer | Name                 | Main Responsibility                              |
| ----- | -------------------- | ------------------------------------------------ |
| 4     | Application Layer    | Provides network services to applications        |
| 3     | Transport Layer      | End-to-end communication                         |
| 2     | Internet Layer       | IP addressing and routing                        |
| 1     | Network Access Layer | Local network delivery and physical transmission |

## 4. Responsibilities of Each Layer

### Layer 4 – Application Layer

* Closest layer to the user.
* Provides network communication services to applications.
* Handles application-level communication.
* Includes responsibilities similar to the Application, Presentation and Session layers of the OSI model.

**Protocols:**

* HTTP / HTTPS – Web communication.
* DNS – Domain name resolution.
* SMTP – Sending emails.
* FTP – File transfer.
* DHCP – Automatically assigns IP configuration.

**Example:** When you open YouTube, your browser uses HTTP/HTTPS to communicate with YouTube's server.

### Layer 3 – Transport Layer

* Responsible for end-to-end communication between applications.
* Divides application data into smaller units when required.
* Uses port numbers to identify applications.
* Handles reliability, sequencing and flow control when required.

**Protocols:**

* TCP (Transmission Control Protocol)

  * Connection-oriented.
  * Reliable data delivery.
  * Maintains data order.
  * Retransmits lost data.

* UDP (User Datagram Protocol)

  * Connectionless.
  * Does not guarantee delivery.
  * Lower communication overhead.
  * Useful for real-time communication.

**Data Units:**

* TCP → Segment.
* UDP → Datagram.

**Example:** Your browser communicates with a web server using TCP or UDP, depending on the transport protocol being used.

### Layer 2 – Internet Layer

* Responsible for logical addressing and routing.
* Uses IP addresses to identify source and destination devices.
* Helps packets travel across different networks.
* Routers mainly operate at this layer.

**Protocols:**

* IPv4 – 32-bit IP addressing.
* IPv6 – 128-bit IP addressing.
* ICMP – Network error reporting and diagnostics.

**Data Unit:** Packet.

**Example:**

* Source IP: 192.168.1.10
* Destination IP: 142.250.183.14

### Layer 1 – Network Access Layer

* Responsible for communication over the local network link.
* Handles framing and physical transmission.
* Uses MAC addresses for local network delivery.
* Converts frames into physical signals for transmission.

**Examples:**

* Ethernet.
* Wi-Fi (IEEE 802.11).

**Data Units:**

* Frame (Data Link).
* Bits (Physical).

**Example:** Your laptop sends data to your Wi-Fi router using wireless signals.

---

## 5. How Does the TCP/IP Model Work? (Complete Workflow)

Let's understand with an example.

**Scenario:** You open your browser and visit `youtube.com`.

Your laptop sends a request to YouTube's server.

### A. Sender Side – Encapsulation

Data moves from the Application Layer to the Network Access Layer.

**Step 1 – Application Layer (Layer 4)**

* Your browser generates an HTTP/HTTPS request.
* Application data is prepared for transmission.

**Step 2 – Transport Layer (Layer 3)**

* TCP or UDP handles transport.
* Adds source and destination port numbers.
* TCP divides data into segments.
* UDP carries data in datagrams.

**Step 3 – Internet Layer (Layer 2)**

* Adds source and destination IP addresses.
* Creates an IP packet.
* Determines the destination for packet routing.

**Step 4 – Network Access Layer (Layer 1)**

* Adds source and destination MAC addresses.
* Creates a frame.
* Converts the frame into physical signals.
* Sends data through Wi-Fi or Ethernet.

### B. What Happens During Transmission?

* Data travels through the network towards the destination.
* Routers examine IP addresses to forward packets.
* At each network hop, the Data Link frame is processed and a new frame is created for the next link.
* MAC addresses can change at every hop.
* Source and destination IP addresses generally remain the same, except when NAT modifies them.

### C. Receiver Side – Decapsulation

When data reaches the destination device, the process happens in reverse.

Data moves from the Network Access Layer to the Application Layer.

**Step 1 – Network Access Layer (Layer 1)**

* Receives physical signals.
* Converts them into bits.
* Processes the received frame.

**Step 2 – Internet Layer (Layer 2)**

* Processes the IP packet.
* Checks the destination IP address.
* Removes the IP header.

**Step 3 – Transport Layer (Layer 3)**

* Processes TCP segments or UDP datagrams.
* Uses port numbers to identify the receiving application.
* TCP handles reassembly and reliability when required.

**Step 4 – Application Layer (Layer 4)**

* Receives application data.
* Processes the HTTP/HTTPS communication.
* Delivers the information to the appropriate application.

---

## 6. What Happens to Data at Each Layer?

As data moves from Layer 4 to Layer 1, each layer adds its own protocol information.

This process is called **Encapsulation**.

| TCP/IP Layer   | Data Unit          |
| -------------- | ------------------ |
| Application    | Data               |
| Transport      | Segment / Datagram |
| Internet       | Packet             |
| Network Access | Frame / Bits       |

**Encapsulation:**

Data → Segment → Packet → Frame → Bits

**Decapsulation:**

Bits → Frame → Packet → Segment → Data

## 7. OSI Model vs TCP/IP Model

| OSI Model (7 Layers) | TCP/IP Model (4 Layers) |
| -------------------- | ----------------------- |
| Application          | Application             |
| Presentation         | Application             |
| Session              | Application             |
| Transport            | Transport               |
| Network              | Internet                |
| Data Link            | Network Access          |
| Physical             | Network Access          |

**Important:**

* OSI is a conceptual reference model.
* TCP/IP is a practical networking model.
* TCP/IP has four layers because some responsibilities are grouped together.
* TCP/IP was developed before the OSI reference model.

## 8. Quick Revision

* Layer 4 – Application: HTTP, HTTPS, DNS, FTP.
* Layer 3 – Transport: TCP, UDP and port numbers.
* Layer 2 – Internet: IP addresses and routing.
* Layer 1 – Network Access: MAC addresses, frames and physical transmission.

**Remember:**

* Sender: Layer 4 → Layer 1 (Encapsulation).
* Receiver: Layer 1 → Layer 4 (Decapsulation).
* Application Layer: Application-level communication.
* Transport Layer: End-to-end communication.
* Internet Layer: Routing between networks.
* Network Access Layer: Local network delivery and physical transmission.
