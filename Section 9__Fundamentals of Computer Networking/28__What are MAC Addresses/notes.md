# MAC Address – Networking Notes

## 1. What is a MAC Address?

* MAC stands for **Media Access Control**.
* A hardware-level identifier assigned to a network interface.
* Used to identify network interfaces within a local network (LAN).
* Traditionally 48 bits, represented in hexadecimal format.

**Example:**

```text
A4:5E:60:12:AB:CD
```

## 2. Every Network Interface Has a MAC Address

A device can have multiple network interfaces, and each interface generally has its own MAC address.

**Example:**

* Wi-Fi adapter → MAC Address A
* Ethernet adapter → MAC Address B
* Bluetooth adapter → MAC Address C

**Important:** A MAC address belongs to a network interface, not the entire device.

## 3. Why Do We Use MAC Addresses?

* Identifies network interfaces within a local network.
* Helps deliver Ethernet and Wi-Fi frames to the correct destination.
* Allows switches to identify devices connected to their ports.
* Supports communication between devices within a LAN.

**Example:**

```text
Laptop                  Mobile
   |                       |
   |                       |
   +------ Wi-Fi Router ---+
```

When a laptop sends data to a mobile:

1. The laptop identifies the destination IP address.
2. It uses ARP to discover the corresponding MAC address (IPv4).
3. It creates a frame containing the destination MAC address.
4. The switch or Wi-Fi access point forwards the frame towards the destination.

## 4. What Problem Does a MAC Address Solve?

* Provides a standard hardware-level addressing mechanism.
* Helps switches forward frames to the correct network interface.
* Helps distinguish different network interfaces within a LAN.
* Supports local communication through Ethernet and Wi-Fi.

## 5. What If MAC Addresses Did Not Exist?

* Switches could not use MAC-based forwarding.
* Ethernet and Wi-Fi would require another addressing mechanism.
* Delivering frames to the correct destination would become dependent on an alternative identification system.

**Important:** Networks could still exist using alternative addressing mechanisms, but modern Ethernet and Wi-Fi rely on MAC addressing.

## 6. MAC Address vs IP Address

| MAC Address                                           | IP Address                             |
| ----------------------------------------------------- | -------------------------------------- |
| Data Link Layer                                       | Network Layer                          |
| Identifies a network interface at the data link layer | Provides a network-layer address       |
| Used for local frame delivery                         | Used for communication across networks |
| Usually assigned to the interface                     | Assigned through DHCP or manually      |
| Traditionally 48 bits                                 | IPv4: 32 bits, IPv6: 128 bits          |

## 7. Important Points to Remember

* Every network interface generally has its own MAC address.
* Wi-Fi and Ethernet adapters have different MAC addresses.
* Ethernet and Wi-Fi use MAC addresses for frame delivery.
* Switches use MAC addresses to forward Ethernet frames.
* Routers use IP addresses to route packets between networks.
* MAC addresses are not used for end-to-end routing across the internet.
* MAC addresses can be changed or spoofed through software.

**Real-world example:** When a laptop accesses YouTube through a mobile hotspot, MAC addresses help with local communication between the laptop and phone. Across the internet, IP addresses are used for routing.
