* **What is DNS?**

  * DNS stands for Domain Name System.
  * It translates domain names (e.g., `google.com`) into IP addresses that computers use to communicate over a network.

* **Why Do We Need DNS?**

  * Domain names are easier for humans to remember than IP addresses.
  * DNS helps browsers find the IP address associated with a domain name.

* **Parts of a Domain Name**

  Example: `www.google.com`

  * **Subdomain:** `www` — identifies a subdomain under `google.com`.
  * **Second-Level Domain (SLD):** `google` — the main name registered under `.com`.
  * **Top-Level Domain (TLD):** `com` — the last named part of the domain.
  * **DNS Root (`.`):** The top of the DNS hierarchy, usually omitted when writing domain names.

* **What Is DNS Resolution?**

  * DNS resolution is the process of finding the IP address associated with a domain name.

* **How Does DNS Resolution Work?**

  * 1. You enter a domain name into your browser.
  * 2. The browser or operating system checks its DNS cache.
  * 3. If the answer is not cached, a DNS resolver looks up the answer, contacting other DNS servers when necessary.
  * 4. The resolver returns the IP address.
  * 5. The browser uses that address to connect to the server.

* **Important DNS Components**

  * **DNS Resolver:** Finds DNS answers on behalf of your device.
  * **Root Name Server:** Directs the resolver toward the appropriate TLD name servers.
  * **TLD Name Server:** Directs the resolver toward the domain's authoritative name servers.
  * **Authoritative Name Server:** Stores DNS records for a domain and provides authoritative answers.

* **Important Points**

  * DNS is a distributed, hierarchical system.
  * DNS can return different types of records, including A (IPv4 address), AAAA (IPv6 address), and MX (mail server).
  * DNS caching reduces lookup time and unnecessary queries.
  * DNS resolves domain names; it does not itself transfer website content.

---

1. DNS Hierarchy
* DNS follows a hierarchical structure.
* Root (.): The top of the DNS hierarchy, coordinated globally by ICANN.
* Top-Level Domain (TLD): Examples: .com, .org, .net, .in.
* Second-Level Domain (SLD): The registered domain name, e.g., procoder in procoder.com.
* Subdomain: An additional level, e.g., app in app.procoder.com.

2. Role of ICANN, VeriSign, and GoDaddy
* ICANN: Coordinates the DNS root and global domain-name system.
* VeriSign: Operates the registry for .com and .net.
* GoDaddy: A domain registrar where people can register domain names.