📁 Node.js File Reading

Node.js provides three common ways to read files:

fs.readFileSync()
fs.readFile()
fs.promises.readFile()
🧪 Experiment: readFileSync()
console.time("read");

const data = fs.readFileSync("./index.html");

console.timeEnd("read");
What happens?
JavaScript
   |
readFileSync()
   |
⛔ Main thread BLOCKED
   |
File completely read
   |
Next JS code runs

If a huge file takes 2 seconds to read, JavaScript cannot execute other work during those 2 seconds.

⚠️ Why?

readFileSync() is synchronous.

It waits until the file operation finishes.

Use it when:
Small scripts
Configuration during startup
Simple CLI programs
Situations where blocking is acceptable

❌ Avoid it inside a server request handler because it can block other requests.

🧪 Experiment: readFile()
fs.readFile("./index.html", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

console.log("Running...");


The JavaScript thread doesn't wait for the file.

Use it when:

You want the callback style of asynchronous programming.

🧪 Experiment: fs.promises.readFile()
const fs = require("fs");

async function readFile() {
  const data = await fs.promises.readFile("./index.html");

  console.log(data);
}

readFile();

console.log("Running...");
Flow
readFile()
   ↓
File I/O starts
   ↓
await → async function pauses
   ↓
JS can continue
   ↓
File finishes
   ↓
Promise settles
   ↓
code after await → Microtask
Important

await does NOT block the main thread.

It only pauses that async function.

⚖️ Which One Should I Choose?
Method	Blocking?	Style	Recommended
readFileSync()	🔴 Yes	Synchronous	Only when blocking is okay
readFile()	🟢 No	Callback	When using callbacks
fs.promises.readFile()	🟢 No	Promise / async-await	⭐ Usually preferred
⭐ General choice

For modern Node.js applications:

const data = await fs.promises.readFile("./index.html");

Why?

✅ Non-blocking
✅ Easy to read
✅ Works naturally with async/await
✅ Better suited for servers
✅ Cleaner error handling with try/catch

🎯 Remember

Sync = wait
Callback = continue + callback later
Promise = continue + await later