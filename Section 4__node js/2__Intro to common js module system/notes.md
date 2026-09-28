📦 CommonJS Module System — Introduction

A beginner-friendly summary of what I learned about the CommonJS Module System in Node.js.

🧩 What is the CommonJS Module System?

CommonJS (CJS) is Node.js's traditional module system.

It allows us to:

Split code into multiple files
Export code from one file
Import and use that code in another file
Keep our application organized
Basic idea
File A
  ├── module.exports → exports a value
  │
  └── File B
       └── require() → receives the exported value
📤 module.exports

module.exports is used to export a value from a module.

Example
// math.js

function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

module.exports = { sum, product };

Here, math.js exports an object containing sum and product.

📥 require()

require() is used to import a module.

// app.js

const math = require("./math");

console.log(math.sum(10, 20));

The important thing to understand is:

require() returns the value that the required module assigned to module.exports.

⚙️ What happens when require() runs?

When Node.js sees:

const math = require("./math");

Conceptually, the process is:

1. require("./math") is called

2. Node.js loads math.js

3. Node.js executes the code inside math.js

4. Node.js gets the value of module.exports

5. require() returns that value

6. math receives the returned value
Example
// math.js

console.log("Math module is running");

module.exports = {
  sum: (a, b) => a + b
};
// app.js

const math = require("./math");

console.log(math);

Output:

Math module is running
{ sum: [Function: sum] }

So:

The required module is executed first, and then its module.exports value is returned by require().

🔄 What can require() return?

require() does not only return objects.

It returns whatever value is assigned to module.exports.

Number
module.exports = 100;
const value = require("./file");

console.log(value); // 100
String
module.exports = "Hello";
Array
module.exports = [1, 2, 3];
Object
module.exports = {
  name: "Ansh",
  age: 20
};
Function
module.exports = function add(a, b) {
  return a + b;
};
Key point

require() returns whatever the module exports through module.exports.

🧠 module.exports vs require()
Concept	Purpose
module.exports	Export a value from a module
require()	Import a module and receive its exported value

Think:

module.exports → "Send this out"
require()      → "Give me what that module sent"
🧱 Destructuring with require()

If module.exports contains an object:

// math.js

function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

module.exports = { sum, product };

We can receive the whole object:

const math = require("./math");

console.log(math.sum(2, 3));
console.log(math.product(2, 3));

Or destructure the returned object directly:

const { sum, product } = require("./math");

console.log(sum(2, 3));
console.log(product(2, 3));

This:

const { sum, product } = require("./math");

is conceptually similar to:

const math = require("./math");

const sum = math.sum;
const product = math.product;
⚠️ Common Mistake

The correct property is:

module.exports

Not:

module.export
❌ Wrong
module.export = { sum, product };
✅ Correct
module.exports = { sum, product };

Remember:

exports ✅
export  ❌

exports is plural.

🎯 Core Understanding

The most important concept from this lesson:

CommonJS Module

1. `module.exports`
   → Defines what the module exposes

2. `require()`
   → Loads and executes the module

3. `module.exports` value
   → Becomes the return value of `require()`

4. Receiving variable
   → Gets that returned value

Another simple way to remember it:

Export → module.exports
Import → require()

And:

require() executes the required module and returns whatever value that module exported through module.exports.

📝 Quick Revision
// math.js

function sum(a, b) {
  return a + b;
}

module.exports = { sum };
// app.js

const { sum } = require("./math");

console.log(sum(10, 20));
Process
1. math.js defines sum

2. math.js exports sum using module.exports

3. app.js calls require("./math")

4. Node.js loads math.js

5. Node.js executes math.js

6. require() receives { sum }

7. Destructuring extracts sum

8. sum(10, 20) is executed
🔗 How CommonJS Works

Instead of a diagram with arrows, remember the relationship as four simple steps:

Step	What happens
1. Export	module.exports defines the value to expose
2. Require	require() loads the module
3. Execute	Node.js executes the module's code
4. Return	require() returns the module.exports value

So the complete idea is:

module.exports
      ↓
defines the exported value

require("./math")
      ↓
loads + executes math.js

require()
      ↓
returns module.exports

const math = ...
      ↓
receives the returned value

Core rule:

🧠 module.exports decides what a module gives, and require() receives what it gives.

🚀 Final Takeaway

The CommonJS module system allows Node.js applications to divide code into separate modules.

The two most important things are:

module.exports // Export
require()      // Import

The key relationship is:

require() returns the value stored in module.exports after executing the required module.