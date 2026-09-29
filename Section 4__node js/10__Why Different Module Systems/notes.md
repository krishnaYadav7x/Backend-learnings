📦 Why Do We Have Different Module Systems?

The main reason is JavaScript evolved over time, and different environments needed different ways to organize and load code.

🔑 Important Points
🕰️ CommonJS came first
Node.js originally used CommonJS because JavaScript did not have an official module system at that time.
🌐 ES Modules came later
JavaScript eventually introduced an official module system: ESM (import / export).
🖥️ Different environments
CommonJS → mainly associated with Node.js
ESM → standard JavaScript module system, supported by browsers and Node.js
⚡ Different loading behavior
CommonJS → designed around synchronous require()
ESM → designed around static imports and asynchronous module loading
🔄 Backward compatibility
Node.js couldn't simply remove CommonJS because a huge amount of existing Node.js code depended on it.
🧠 In one line

CommonJS exists because Node.js needed modules before JavaScript had an official module system; ESM exists because JavaScript later introduced a standardized module system.