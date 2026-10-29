# Three Types of IP Addresses When Using a Mobile Hotspot

### 1. Default Gateway IP Address

* The default gateway is the IP address of the device (usually your mobile phone) that acts as the next hop for your laptop's internet traffic.
* It receives packets from your laptop and forwards them toward their destination.
* Example: `192.168.43.1`

### 2. Laptop IP Address (Private IP)

* The IP address assigned to your laptop by your mobile hotspot, usually through DHCP.
* It identifies your laptop within the hotspot's local network.
* Example: `192.168.43.100`

### 3. Mobile IP Address (Assigned by ISP)

* The IP address used by your mobile phone on the mobile network, assigned or configured through your internet service provider (ISP).
* Your phone uses this network connection to forward your laptop's traffic toward the internet.
* The IPv4 address may be private and shared through CGNAT, or it may be public.
* Example: `10.150.20.30` (illustrative private IPv4 address).

### How They Work Together

* **Laptop IP:** Identifies your laptop on the hotspot network.
* **Default gateway:** Receives your laptop's internet-bound packets and forwards them toward the mobile network.
* **Mobile IP:** Identifies your phone on the mobile network so its traffic can travel toward internet destinations.
