# Dynamic IP Address vs Static IP Address

### 1. Dynamic IP Address

* A **dynamic IP address** is assigned automatically to a device by a router using DHCP.
* The IP address may change when you reconnect to the network, but it does not necessarily change every time.
* **Example:** Your phone gets `192.168.1.5` today and may get `192.168.1.8` later.

### 2. Static IP Address

* A **static IP address** stays the same because it is configured manually or reserved for a device.
* It generally remains unchanged even when the device disconnects and reconnects to the network.
* **Example:** Your phone always gets `192.168.1.10`.

### 3. Why Do We Have Both?

* **Dynamic IP:** Makes IP address management easier because the router automatically assigns addresses to devices.
* **Static IP:** Useful when a device needs a consistent IP address, such as a server, printer, or other device that must be easy to find on the network.

### 4. Main Differences

| Dynamic IP                    | Static IP                                  |
| ----------------------------- | ------------------------------------------ |
| Assigned automatically        | Configured manually or reserved            |
| May change over time          | Normally stays the same                    |
| Easier to manage many devices | Useful for devices needing a fixed address |
| Common for phones and laptops | Common for servers and network devices     |

### 5. Important Point to Remember

**The router does not change its IP address every time your phone gets a new dynamic IP address.**

The router assigns IP addresses to devices on the local network. Your phone may receive a different address while the router keeps the same address.

Also, there are two different IP addresses to understand:

* **Private IP:** Used by your phone inside your Wi-Fi network.
* **Public IP:** Used by your network to communicate with the internet. Your ISP may assign it dynamically or statically.

Changing your phone's private IP does not necessarily change your public IP.
