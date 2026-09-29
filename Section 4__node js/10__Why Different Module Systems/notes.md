📦 Why Do We Have Different Module Systems?

JavaScript did not always have a built-in module system. CommonJS and ES Modules appeared at different points in JavaScript's evolution to solve the problem of organizing and sharing code.

🕰️ 1. CommonJS Came First

When Node.js was created, JavaScript did not have an official module system.

Node.js adopted CommonJS to provide a way to:

📦 Split code into multiple files
♻️ Reuse code
🔗 Manage dependencies
const math = require("./math");
🌐 2. ES Modules Came Later

JavaScript later introduced an official, standardized module system called ES Modules (ESM).

It uses:

import
export

Example:

import { add } from "./math.js";

export { add };
🖥️ 3. Different Environments
Module System	Mainly Used In
🟨 CommonJS	Node.js
🟦 ES Modules	Browsers + Node.js

ES Modules became the standard JavaScript module system, while CommonJS remains important for compatibility with existing Node.js code.

⚡ 4. Different Loading Behavior

The two systems were designed with different loading models:

🟨 CommonJS
require()
    ↓
Synchronous module loading
🟦 ES Modules
import
    ↓
Static module imports
    ↓
Asynchronous module loading
🔄 5. Backward Compatibility

Node.js already had a large ecosystem built with CommonJS.

Therefore, Node.js continues to support both CommonJS and ES Modules rather than removing CommonJS.

This allows:

📦 Existing CommonJS projects to continue working
🆕 New projects to use ES Modules
🔄 Gradual migration between module systems
🧠 In Short

CommonJS was introduced because Node.js needed a module system before JavaScript had an official one. ES Modules were introduced later as JavaScript's standardized module system.