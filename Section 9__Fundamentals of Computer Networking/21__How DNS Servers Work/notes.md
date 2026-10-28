Example: A user enters youtube.com in the browser.

1. Browser / Operating System

* Checks the DNS cache for the IP address of youtube.com.
* If not cached, sends a DNS query to the recursive DNS resolver.

2. Recursive DNS Resolver (usually provided by ISP)
* Checks its cache for the DNS record.
* If not cached, sends a query to a root DNS server.

3. Root DNS Server
* Receives the query for youtube.com.
* Returns a referral containing the addresses of .com TLD DNS servers.
* The recursive resolver queries a .com TLD DNS server.

4. .com TLD DNS Server
* Receives the query for youtube.com.
* Returns a referral containing the addresses of the authoritative DNS servers for youtube.com.
* The recursive resolver queries an authoritative DNS server.

5. Authoritative DNS Server
* Receives the query for youtube.com.
* Returns the requested DNS record, such as an A record containing an IPv4 address.
* The recursive resolver receives the DNS record.

6. Recursive DNS Resolver
* Caches the DNS record according to its TTL (Time to Live).
* Returns the IP address to the user's computer.

7. Browser
* Uses the IP address to connect to the appropriate web server.
* Sends an HTTP/HTTPS request.
* Receives and displays the website content.