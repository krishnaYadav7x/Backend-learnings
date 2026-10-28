1. Does every TLD have different DNS servers?
* .com → Has DNS servers responsible for the .com domain.
* .org → Has DNS servers responsible for the .org domain.
* .gov → Has DNS servers responsible for the .gov domain.
* .in → Has DNS servers responsible for the .in domain.

* Important: Each TLD has its own DNS delegation, but it may have multiple DNS servers. Different TLDs may also use the same underlying server infrastructure.

2. How does it work?

* Suppose you enter youtube.com in your browser.

* Your recursive DNS resolver asks a root DNS server about youtube.com.
* The root server directs it to the .com TLD DNS servers.
* The resolver asks a .com TLD DNS server about youtube.com.
* The .com server directs it to the authoritative DNS servers responsible for youtube.com.
* The authoritative server provides the requested DNS record.
---
* Root DNS servers return the IP addresses of the .com TLD DNS servers to the recursive DNS resolver.
The resolver then uses those IP addresses to contact a .com TLD DNS server.