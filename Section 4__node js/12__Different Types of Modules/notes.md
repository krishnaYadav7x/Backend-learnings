1. 🟢 Core / Native Modules

These are built into Node.js. You don't need to install them.

Examples:

import fs from "node:fs";
import http from "node:http";
import crypto from "node:crypto";

👉 Node.js provides these modules for common tasks like files, networking, encryption, etc.

2. 🔵 User-Defined Modules

These are modules you create yourself.

For example:

project/
├── app.js
└── math.js
// math.js
export const num = 10;

Then:

// app.js
import { num } from "./math.js";

👉 You create these modules to organize and reuse your own code.

3. 🟠 Third-Party / npm Modules

These are modules created by other developers/organizations and published on npm.

For example:

npm install axios

Then:

import axios from "axios";

👉 You don't create the module yourself; you install and use it.

Easy way to remember
             MODULES
                │
      ┌─────────┼─────────┐
                       
    Core      User      Third-party
   (Node.js)  (You)       (npm)
      │         │           │
     fs       math.js     axios
     http     utils.js    express
     crypto   config.js   lodash

In one line:

Core = Node gives it to you
User-defined = You create it
Third-party = Someone else creates it and publishes it on npm