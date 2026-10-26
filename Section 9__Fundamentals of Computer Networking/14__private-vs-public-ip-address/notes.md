# Private IP Address vs Public IP Address

* **Private IP Address**

  * Used to identify devices within a local network.
  * Assigned to devices by a router, usually through DHCP.
  * Cannot be routed directly over the public internet.
  * Example: `192.168.0.2`, `10.24.1.2`

* **Public IP Address**

  * Used to identify a network's internet-facing connection on the public internet.
  * Usually assigned by an Internet Service Provider (ISP).
  * Servers use public IP addresses to communicate with clients over the internet.
  * Example: `145.4.2.8` (illustrative).

## How Private and Public IP Addresses Work

* A router typically has:

  * A **private IP address** on its local network (LAN).
  * A **WAN IP address** for its connection to the upstream network, which may be public or private.
* The router assigns private IP addresses to connected devices.
* When a device requests a website:

  1. The device sends the request to its router.
  2. The router forwards the traffic toward the ISP.
  3. The traffic is routed through the internet toward the destination server.
  4. The server sends a response back, which returns through the network to the device.

## NAT (Network Address Translation)

* NAT translates IP addresses, and often port numbers, as traffic passes between networks.
* In a typical home network, the router translates devices' private IP addresses into its public IP address for internet access.
* Multiple devices can share one public IP address using different port mappings.
* The router uses these mappings to send incoming responses to the correct device.
* NAT does **not** mean that private IP addresses are changed permanently.

## CGNAT (Carrier-Grade NAT)

* CGNAT is NAT implemented by an ISP to allow multiple customers to share a smaller pool of public IPv4 addresses.
* The customer's router may receive a **private IP address or a shared-address-space IP address** from the ISP instead of a public IP address.
* The customer's router performs NAT for devices on the local network.
* The ISP then performs another translation through CGNAT before traffic reaches the public internet.

**Example traffic path:**

`Device (192.168.0.2)` → `Home Router` → `ISP Network / CGNAT` → `Public Internet` → `Server`

* With CGNAT, customers generally cannot accept unsolicited incoming connections directly through their shared public IP address without additional ISP support or another connection method.
* CGNAT is commonly used because public IPv4 addresses are limited.

## Private IP Address Ranges (IPv4)

* `10.0.0.0 – 10.255.255.255`
* `172.16.0.0 – 172.31.255.255`
* `192.168.0.0 – 192.168.255.255`

These ranges are reserved for private networks and are not directly routed over the public internet.

## Is a Public IP Address Static?

* **No.** A public IP address is not necessarily static.
* A **dynamic IP address** can change over time.
* A **static IP address** is intended to remain the same.
* An ISP can assign dynamic or static addresses, depending on its service.
* A customer usually cannot choose or change an ISP-assigned public IP address freely.

## Is Revealing a Public IP Address Dangerous?

* A public IP address is not a password and does not automatically give someone access to your device.
* It can reveal approximate geographic or ISP-related information.
* It may expose a network to unwanted connection attempts, depending on its configuration.
* Use a firewall, keep devices updated, and avoid exposing unnecessary services to the internet.

## Node.js Server: `0.0.0.0` vs `127.0.0.1`

Example:

`server.listen(4000, '0.0.0.0')`

* **`0.0.0.0`**: Tells the server to listen on all available IPv4 network interfaces.
* **`127.0.0.1`**: The IPv4 loopback address, used to access the same computer.
* **`localhost`**: Usually resolves to a loopback address, such as `127.0.0.1` or `::1`.
* **Port `4000`**: Identifies the application endpoint on which the server is listening.

### Who Can Access the Server?

* **Using `127.0.0.1:4000`:** The server can be accessed from the same computer through its loopback interface.
* **Using `0.0.0.0` as the listening address:** The server can accept connections through available IPv4 interfaces, subject to firewall and network settings.
* **From another device on the same Wi-Fi:** Use the server computer's local IP address, such as `192.168.0.2:4000`.
* **From the public internet:** Access requires suitable public routing and firewall/NAT configuration. CGNAT may prevent direct incoming access.

**Important:** `0.0.0.0` is not a loopback address and is not an address that clients should use to connect to the server.
