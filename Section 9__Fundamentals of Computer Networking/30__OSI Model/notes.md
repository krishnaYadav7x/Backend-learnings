# The most important concept:

* The OSI Model is not saying that data physically travels through seven separate devices. These seven layers represent seven different responsibilities involved in network communication.


# OSI Model – Networking Notes

## 1. What is the OSI Model?

* OSI stands for **Open Systems Interconnection**.
* It is a conceptual reference model that explains how devices communicate over a network.
* It divides network communication into **7 different layers**.
* Each layer has its own responsibilities.
* Each layer communicates with the layer directly above or below it.

## 2. Why Do We Learn the OSI Model?

* To understand how data travels from one device to another.
* To understand the responsibilities of different networking layers.
* To understand how protocols like HTTP, TCP, IP and Ethernet work.
* To understand how data is divided into smaller pieces and transmitted.
* To troubleshoot networking problems layer by layer.

## 3. Seven Layers of the OSI Model

| Layer | Name         | Main Responsibility                         |
| ----- | ------------ | ------------------------------------------- |
| 7     | Application  | Provides network services to applications   |
| 6     | Presentation | Data formatting, encryption and compression |
| 5     | Session      | Manages communication sessions              |
| 4     | Transport    | End-to-end data delivery                    |
| 3     | Network      | Logical addressing and routing              |
| 2     | Data Link    | Node-to-node delivery using MAC addresses   |
| 1     | Physical     | Transmits raw bits through physical media   |

## 4. Responsibilities of Each Layer

### Layer 7 – Application Layer

* Closest layer to the user.
* Provides network services to applications.
* Allows applications to communicate over a network.

**Examples:**

* HTTP / HTTPS – Web communication.
* DNS – Domain name resolution.
* SMTP – Sending emails.
* FTP – File transfer.

### Layer 6 – Presentation Layer

* Responsible for data representation and formatting.
* Converts data into a format understood by the receiving application.
* Handles:

  * Encryption and decryption.
  * Compression and decompression.
  * Data serialization and deserialization.

**Example:** Converting data into a suitable format before transmission.

### Layer 5 – Session Layer

* Establishes communication sessions between applications.
* Manages and maintains communication sessions.
* Handles session termination.
* Helps coordinate communication between applications.

**Example:** Managing a communication session between two applications.

### Layer 4 – Transport Layer

* Responsible for end-to-end data delivery between applications.
* Divides application data into smaller units.
* Uses port numbers to identify sending and receiving applications.
* Handles reliability, sequencing and flow control when required.

**Protocols:**

* TCP – Reliable and connection-oriented communication.
* UDP – Connectionless communication with lower overhead.

**Data Unit (PDU):**

* TCP → Segment.
* UDP → Datagram.

**Example:** Port 443 is commonly used for HTTPS communication.

### Layer 3 – Network Layer

* Responsible for logical addressing and routing.
* Uses IP addresses to identify source and destination devices.
* Determines how packets travel across different networks.
* Routers mainly operate at this layer.

**Protocol:** IP (IPv4 / IPv6).

**Data Unit:** Packet.

**Example:**

* Source IP: 192.168.1.10
* Destination IP: 142.250.183.14

### Layer 2 – Data Link Layer

* Responsible for node-to-node delivery over a local network link.
* Uses MAC addresses to identify network interfaces.
* Adds a header and trailer to create a frame.
* Handles error detection at the link level.
* Switches mainly operate at this layer.

**Examples:**

* Ethernet.
* Wi-Fi (IEEE 802.11).

**Data Unit:** Frame.

### Layer 1 – Physical Layer

* Responsible for transmitting raw bits (0s and 1s).
* Converts bits into physical signals.
* Transmits signals through:

  * Electrical signals (Copper cables).
  * Light signals (Fiber optic cables).
  * Radio waves (Wireless communication).

**Data Unit:** Bits.

---

## 5. How Does the OSI Model Work? (Complete Workflow)

Let's understand this with an example.

**Scenario:** You open your browser and visit `youtube.com`.

Your laptop sends a request to YouTube's server.

### A. Sender Side – Encapsulation

When your laptop sends data, it travels from Layer 7 to Layer 1.

**Step 1 – Application Layer (Layer 7)**

* Your browser generates an HTTP/HTTPS request.
* This is the application data.

**Step 2 – Presentation Layer (Layer 6)**

* Data is represented in the required format.
* Encryption and other transformations may happen here.
* HTTPS uses TLS for encryption.

**Step 3 – Session Layer (Layer 5)**

* Manages the communication session.
* Helps establish, maintain and terminate sessions.

**Step 4 – Transport Layer (Layer 4)**

* TCP or UDP handles transport.
* Adds source and destination port numbers.
* TCP divides data into segments.
* UDP carries data in datagrams.

**Step 5 – Network Layer (Layer 3)**

* Adds source and destination IP addresses.
* Creates an IP packet.
* Helps routers forward packets towards the destination.

**Step 6 – Data Link Layer (Layer 2)**

* Adds source and destination MAC addresses.
* Adds a trailer for error detection.
* Creates an Ethernet or Wi-Fi frame.

**Step 7 – Physical Layer (Layer 1)**

* Converts the frame into bits and physical signals.
* Transmits the signals through cables or wireless communication.

### B. What Happens During Transmission?

* Data travels through the network towards the destination.
* Routers examine IP packet information to forward packets.
* At every network link, a new frame is used to deliver data to the next hop.
* The MAC addresses can change at each hop.
* The source and destination IP addresses generally remain the same across the route, except when NAT changes them.

### C. Receiver Side – Decapsulation

When data reaches the destination device, the process happens in reverse.

Data travels from Layer 1 to Layer 7.

**Step 1 – Physical Layer (Layer 1)**

* Receives physical signals.
* Converts them into bits.

**Step 2 – Data Link Layer (Layer 2)**

* Processes the received frame.
* Checks the destination MAC address.
* Removes the Data Link header and trailer.

**Step 3 – Network Layer (Layer 3)**

* Processes the IP packet.
* Checks the destination IP address.
* Removes the IP header.

**Step 4 – Transport Layer (Layer 4)**

* Processes TCP segments or UDP datagrams.
* Uses port numbers to deliver data to the correct application.
* TCP reassembles data and handles reliability when required.

**Step 5 – Session Layer (Layer 5)**

* Handles session-related communication.

**Step 6 – Presentation Layer (Layer 6)**

* Decrypts and decompresses data when required.
* Converts data into the required format.

**Step 7 – Application Layer (Layer 7)**

* Delivers the data to the browser or appropriate application.
* The application processes the received information.

---

## 6. What Happens to Data at Each Layer?

As data moves from Layer 7 to Layer 1, each layer adds its own information.

This process is called **Encapsulation**.

| Layer        | Data Unit          |
| ------------ | ------------------ |
| Application  | Data               |
| Presentation | Data               |
| Session      | Data               |
| Transport    | Segment / Datagram |
| Network      | Packet             |
| Data Link    | Frame              |
| Physical     | Bits               |

**Encapsulation:**

Data → Segment → Packet → Frame → Bits

**Decapsulation:**

Bits → Frame → Packet → Segment → Data

## 7. Important Terms

**Encapsulation**

* Adding protocol information (headers and sometimes trailers) to data as it moves down the layers.

**Decapsulation**

* Processing and removing protocol information as data moves up the layers at the receiving device.

**PDU (Protocol Data Unit)**

* The name given to the data unit at a particular networking layer.

**Hop-to-Hop Delivery**

* Data Link Layer responsibility.
* Delivers a frame from one network node to the next node on a particular link.

**End-to-End Delivery**

* Transport Layer responsibility.
* Provides communication between applications running on the source and destination devices.

**Logical Address**

* IP address used at the Network Layer.

**Physical Address**

* MAC address used at the Data Link Layer.

## 8. Quick Revision

* Layer 7 – Application: Application network services.
* Layer 6 – Presentation: Encryption, compression and formatting.
* Layer 5 – Session: Session management.
* Layer 4 – Transport: TCP, UDP and port numbers.
* Layer 3 – Network: IP addresses and routing.
* Layer 2 – Data Link: MAC addresses and frames.
* Layer 1 – Physical: Bits and physical signals.

**Remember:**

* Sender: Layer 7 → Layer 1 (Encapsulation).
* Receiver: Layer 1 → Layer 7 (Decapsulation).
* Transport Layer: End-to-end communication.
* Data Link Layer: Hop-to-hop delivery.
* Network Layer: Routing between networks.
