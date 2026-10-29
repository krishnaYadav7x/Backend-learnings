* **What are Port Numbers?**

  * Port numbers are logical numbers used to identify a specific application or service during network communication.
  * Example: `localhost:4000` — `4000` is the port number on which the Node.js server listens.

* **Why Do We Need Port Numbers?**

  * A single device can run multiple network applications simultaneously.
  * Port numbers help the operating system deliver incoming data to the correct application.

* **What Problem Do Port Numbers Solve?**

  * An IP address identifies the device, but it doesn't identify the specific application receiving the data.
  * Port numbers help identify the network endpoints involved in communication.

* **What Happens If a Port Number Is Not in Use?**

  * If a client sends a request to a port where no application is listening, the connection usually fails.
  * Example: If no server is listening on port `4000`, accessing `localhost:4000` usually results in a connection error.
  * A port number can be valid even when no application is using it.

* **Default Browser Ports (80 and 443)**

  * **Port 80:** The default port for HTTP.
  * **Port 443:** The default port for HTTPS.
  * When you enter `http://example.com`, the browser uses port `80` by default.
  * When you enter `https://example.com`, the browser uses port `443` by default.
  * Because these are default ports, you usually don't need to type them in the URL.

* **What Port Does the Browser Use Behind the Scenes?**

  * When a browser connects to a server, the server's destination port is usually `80` for HTTP or `443` for HTTPS.
  * The browser's operating system typically assigns a temporary **source port**, such as `52000`, for that connection.
  * Example:

    * Source: Your computer's IP and port `52000`.
    * Destination: Website server's IP and port `443`.
  * The source port helps the operating system identify which network connection incoming response data belongs to.

* **What Are Source and Destination?**

  * **Source:** The endpoint sending the data.
  * **Destination:** The endpoint receiving the data.
  * Network communication uses source and destination IP addresses and port numbers.

* **Example: Client and Server Communication**

  Suppose a client accesses a Node.js server at `192.168.1.10:4000`.

  **1. Client → Server (Request)**

  * Source: Client's IP and temporary port — `192.168.1.5:52000`.
  * Destination: Server's IP and listening port — `192.168.1.10:4000`.

  **2. Server → Client (Response)**

  * Source: Server's IP and port — `192.168.1.10:4000`.
  * Destination: Client's IP and port — `192.168.1.5:52000`.

* **Important Points**

  * When the client sends a request, the client is the source and the server is the destination.
  * When the server sends a response, the server is the source and the client is the destination.
  * The client's source port is usually assigned automatically by the operating system.
  * The server typically listens on a known port, such as `4000`.
  * Source and destination switch roles when the response travels back.
