# DNS Hijacking and Hosts File Redirection

* **1. DNS (Domain Name System)**

  * DNS translates domain names into IP addresses.
  * Example: `youtube.com` → YouTube server's IP address.
  * DNS allows us to access websites using domain names instead of remembering IP addresses.

* **2. Normal DNS Workflow**

  * Enter a domain name in the browser, such as `youtube.com`.
  * The operating system checks its local name-resolution sources, including the hosts file.
  * If there is no matching entry, the system can query a DNS resolver.
  * The DNS resolver finds the IP address using its cache or by querying other DNS servers.
  * The resolver returns the IP address to the system.
  * The browser connects to the destination server and requests the webpage.

* **3. What Is DNS Hijacking?**

  * DNS hijacking occurs when domain name resolution is manipulated to redirect users to an unintended IP address.
  * Example: Entering `youtube.com` opens an unexpected website instead of YouTube.
  * It can happen through compromised DNS settings, DNS resolvers, or other forms of DNS manipulation.

* **4. What Is the Hosts File?**

  * The hosts file is a local system file that maps domain names to IP addresses.
  * Windows hosts file location:
    `C:\Windows\System32\drivers\etc\hosts`
  * A matching hosts-file entry can override the normal DNS lookup for a domain.
  * The hosts file is checked before the system sends a DNS query for that name.

* **5. How Does Hosts File Redirection Work?**

  * Suppose the hosts file contains:
    `127.0.0.1 youtube.com`
  * `127.0.0.1` is the loopback IP address, which points to the local computer.
  * `youtube.com` is the domain name being mapped.
  * When the browser tries to access `youtube.com`, the system directs it to the local computer instead of obtaining the address from a DNS resolver.
  * If a local web server is configured to handle the request, it may display a locally hosted webpage.

* **6. Today's Practical Example**

  * The teacher modified the Windows hosts file.
  * He mapped domain names such as `youtube.com` to a local IP address.
  * When he entered the domain in his browser, the browser opened a local webpage instead of the intended website.
  * A local development server, such as Live Server, may have served that webpage.
  * This demonstrated local domain redirection through the hosts file.

* **7. Normal DNS vs. Hosts File Redirection**

  * **Normal DNS:** The system obtains the domain's IP address from a DNS resolver, using cached information or additional DNS queries.
  * **Hosts file redirection:** The system uses a matching local mapping instead of querying DNS for that domain.
  * **Normal DNS:** Typically directs the browser to the intended website's server.
  * **Hosts file redirection:** Can direct the browser to a different server or the local computer.

* **8. Important Terms**

  * **DNS Resolver:** Receives DNS queries and finds the requested domain's IP address.
  * **Root DNS Server:** Helps direct DNS queries toward the appropriate top-level domain servers.
  * **TLD DNS Server:** Provides information about authoritative DNS servers for a top-level domain, such as `.com`.
  * **Authoritative DNS Server:** Provides DNS records for the domain it manages.
  * **Loopback IP (`127.0.0.1`):** Refers to the local computer.
  * **Live Server:** A development tool that serves webpages locally.
  * **DNS Cache:** Stores previously resolved DNS information to reduce repeated queries.

* **9. Types of DNS Redirection and Hijacking**

  * **Hosts-file manipulation:** Changes local domain-to-IP mappings.
  * **DNS settings manipulation:** Changes which DNS resolver a device uses.
  * **DNS resolver compromise:** Causes a resolver to return incorrect DNS information.
  * **Router DNS manipulation:** Changes DNS settings distributed to connected devices.

* **10. Key Takeaways**

  * DNS translates domain names into IP addresses.
  * The hosts file provides local domain-to-IP mappings.
  * A matching hosts-file entry can prevent a normal DNS query for that domain.
  * `127.0.0.1` refers to your own computer.
  * A hosts-file change affects name resolution on that computer, not every internet user.
  * Hosts-file redirection is a local form of domain-resolution manipulation; it is not necessarily evidence of a malicious DNS attack.
  * Changing the hosts file does not automatically start a local server.
