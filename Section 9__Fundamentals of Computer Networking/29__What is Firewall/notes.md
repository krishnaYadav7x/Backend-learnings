## 1. Windows Defender Firewall

* A security feature that controls incoming and outgoing network traffic.
* Protects our device from unauthorized network access.
* We can allow or block network connections using firewall rules.

## 2. Network Profiles

Windows Firewall has two main network profiles:

* **Private Network**

  * Used for trusted networks, like your home network.
  * Allows more network communication within the trusted network, depending on firewall rules.

* **Public Network**

  * Used for untrusted networks, like public Wi-Fi.
  * Applies stricter firewall rules to protect our device.

## 3. Types of Firewall Rules

**Inbound Rules**

* Control incoming network connections to our device.
* Example: We start a Node.js server.
* If another device tries to access our server, its incoming connection is checked against inbound rules.
* We can allow or block connections based on:

  * Remote IP address
  * Program
  * Port number
  * Protocol (TCP/UDP)

**Outbound Rules**

* Control outgoing network connections from our device.
* Example: We try to access YouTube.com or Google.com.
* The outgoing connection is checked against outbound rules.
* We can allow or block connections based on:

  * Destination IP address
  * Program
  * Port number
  * Protocol (TCP/UDP)

## 4. Understanding Node.js Inbound Rules

* In the screenshot, Node.js JavaScript Runtime has enabled inbound rules.
* Action: Allow
* Profile: Public
* Protocols: TCP and UDP
* Remote Address: Any

**Meaning:**

* Windows Firewall allows incoming connections that match these rules.
* Any remote IP address can match the remote address condition.
* We can modify these rules to control which devices can access our Node.js server.

## 5. Important Difference

* **Inbound:** Controls who can connect to our device.
* **Outbound:** Controls which connections our device can make.
* **Allow:** Permits matching network traffic.
* **Block:** Denies matching network traffic.
* **Public/Private:** Determines which network profile the firewall rule applies to.
