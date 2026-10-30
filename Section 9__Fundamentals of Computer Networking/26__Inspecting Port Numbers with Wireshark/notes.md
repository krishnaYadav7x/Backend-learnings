# Wireshark – Networking Practical Notes

## 1. Wireshark

* A network packet analyzer used to capture and inspect network traffic.
* Helps identify source IP, destination IP, protocols, and port numbers.
* Captures packets sent and received by network interfaces.

## 2. Source IP and Destination IP

* **Source IP:** Sender's IP address.
* **Destination IP:** Receiver's IP address.
* Used to identify communication between devices.

## 3. Display Filters

* Filter packets using specific conditions.

* **By IP address:**

  ```wireshark
  ip.addr == 192.168.1.10
  ```

* **By port:**

  ```wireshark
  tcp.port == 4000
  ```

* **By protocol:**

  ```wireshark
  http
  ```

## 4. Mobile Hotspot IP Addresses

* **Mobile (Cellular Interface):** IP assigned through the mobile network.
* **Default Gateway:** Mobile's hotspot interface IP.
* **Laptop IP:** Private IP assigned by the mobile hotspot.
* Laptop communicates with the default gateway to access external networks.
* Mobile uses NAT to forward laptop traffic through its cellular network.

## 5. Port Numbers

* Port numbers identify applications or services communicating over a network.
* **HTTP:** Port `80`.
* **HTTPS:** Port `443`.
* **Node.js Server:** Example port `4000`.

## 6. Default and Explicit Ports

* HTTP automatically uses port `80`.
* HTTPS automatically uses port `443`.
* Explicit ports are manually specified in URLs.
* Example: `http://localhost:4000`.

## 7. Ephemeral Ports

* Temporary ports assigned by the operating system.

* Browsers generally use ephemeral ports as source ports when initiating connections.

* Example:

  ```text
  Browser: 50000 → Server: 4000
  ```

* Node.js uses the explicitly configured port to listen for requests.

## 8. HTTP vs HTTPS

* **HTTP (Port 80):** Communication is not encrypted.
* **HTTPS (Port 443):** Communication is encrypted using TLS.
* Wireshark can inspect HTTP content.
* HTTPS content generally cannot be read without access to the necessary decryption information.

## 9. TCP Three-Way Handshake

* TCP establishes a connection before transferring application data.
* Three steps:

  * SYN
  * SYN-ACK
  * ACK

## 10. DNS

* DNS converts domain names into IP addresses.
* DNS queries and responses can be captured in Wireshark.
