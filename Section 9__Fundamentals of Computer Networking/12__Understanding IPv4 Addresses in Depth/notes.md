# IP Addresses and IPv4

## 1. What Is an IP Address?

* An **IP address (Internet Protocol address)** is a logical address used to identify a device or network interface on a network.
* It helps data reach the correct destination.
* An IP address may be assigned by a router, a network provider, or a network administrator, depending on the network.
* Example: `192.168.1.10`

## 2. IPv4 Address

* IPv4 stands for **Internet Protocol Version 4**.
* An IPv4 address is **32 bits long**.
* It is divided into **4 parts called octets**.
* Each octet contains 8 bits.
* Each octet can have a decimal value from `0` to `255`.
* Example: `192.168.1.10`

**Binary representation:**

* `192` → `11000000`
* `168` → `10101000`
* `1` → `00000001`
* `10` → `00001010`

The complete IPv4 address in binary is:

`11000000.10101000.00000001.00001010`

## 3. Limitation of IPv4

* IPv4 uses 32 bits.
* Total possible IPv4 addresses = 2³².
* Therefore, IPv4 provides **4,294,967,296 (approximately 4.3 billion) possible addresses**.
* Some addresses are reserved for special purposes, so not all are available for ordinary device assignment.
* The growing number of internet-connected devices created a shortage of publicly usable IPv4 addresses.
* **Solution:** IPv6 was developed. It uses 128-bit addresses and provides a vastly larger address space.

## 4. What Is a Subnet Mask?

* A **subnet mask** is used with an IPv4 address to identify which bits represent the network portion and which represent the host portion.
* The network portion identifies the network.
* The host portion identifies an interface within that network.

**Example:**

IP address: `192.168.1.10`

Subnet mask: `255.255.255.0`

In this example:

* Network portion: `192.168.1`
* Host portion: `10`

The subnet mask tells us that the first 24 bits represent the network portion, while the last 8 bits represent the host portion.

**Binary subnet mask:**

`11111111.11111111.11111111.00000000`

* `1` bits represent the network portion.
* `0` bits represent the host portion.

**Important:** The example above uses a `/24` subnet. Other subnet masks can divide the network and host portions differently.

## 5. Public IP Address

* A public IP address is used to identify a network interface or endpoint in the public internet's addressing system.
* It is generally assigned by an Internet Service Provider (ISP) or allocated through a network provider.
* It enables communication with other systems over the internet.
* Public IPv4 addresses must be globally unique while allocated for use.
* Example: The public IPv4 address assigned to your home router by your ISP.

## 6. Private IP Address

* A private IP address is used within a private network, such as a home, school, or office network.
* It is commonly assigned to devices by a router using DHCP.
* Private IP addresses are not directly routable across the public internet.
* Different private networks can reuse the same private IP addresses.

**Private IPv4 address ranges:**

* `10.0.0.0` – `10.255.255.255`
* `172.16.0.0` – `172.31.255.255`
* `192.168.0.0` – `192.168.255.255`

**Example:**

* Laptop: `192.168.1.10`
* Phone: `192.168.1.11`
* Router's local address: `192.168.1.1`

A router commonly uses NAT (Network Address Translation) to allow devices with private IP addresses to share a public IPv4 address when accessing the internet.

## 7. Public IP vs Private IP

* **Public IP:** Used for communication through the public internet.
* **Private IP:** Used for communication within a private network.
* **Public IP:** Must be globally unique while allocated.
* **Private IP:** Can be reused in different private networks.
* **Public IP:** Commonly assigned by an ISP.
* **Private IP:** Commonly assigned by a router or network administrator.

## 8. What Is Localhost?

* `localhost` refers to the current device.
* It is commonly used when testing applications on your own computer.
* The IPv4 loopback address is `127.0.0.1`.
* The entire IPv4 range from `127.0.0.0` through `127.255.255.255` is reserved for loopback.
* These addresses are not used to communicate with other devices over the public internet.

**Example:**

* If you run a Node.js server on port `3000`, you can access it using `http://127.0.0.1:3000`.
* The request stays on your own computer instead of going to an external device.

## 9. IPv4 Addressing Mistakes and Limitations

* IPv4 provides a limited address space because it uses only 32 bits.
* Some addresses and address ranges are reserved for special purposes.
* The entire `127.0.0.0/8` range is reserved for loopback, not just `127.0.0.1`.
* Private IP addresses cannot be routed directly across the public internet.
* IPv4 address shortages led to techniques such as NAT and the development of IPv6.

## 10. How a Router Assigns IP Addresses

* When a device connects to a home Wi-Fi network, the router commonly assigns it a private IP address using DHCP.
* The router also provides information such as the subnet mask, default gateway, and DNS servers.
* When a device uses mobile data, the mobile network operator assigns or provides the IP configuration.
* The public IP address may be assigned to the phone itself or shared through the mobile operator's network.

**Example of a home network:**

* Router's private IP: `192.168.1.1`
* Laptop's private IP: `192.168.1.10`
* Phone's private IP: `192.168.1.11`
* Home network's public IP: Assigned by the ISP

**Remember:** An IP address identifies a network interface, and a subnet mask helps determine which part of the address identifies the network.
