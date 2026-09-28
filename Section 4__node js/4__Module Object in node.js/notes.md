Node.js module Object

The module object is provided by Node.js for every CommonJS module. It contains information about the current module and controls how the module exports values.

1. What is a Module?

In CommonJS, every JavaScript file is treated as a module.

For example:

project/
├── app.js
├── math.js
└── user.js

Each file is a separate module.

Inside every CommonJS file, Node provides a module object.

console.log(module);
2. module.exports

module.exports defines what the current module gives to another module.

math.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
app.js
const sum = require("./math");

console.log(sum(10, 20));

Output:

30
Important

The value assigned to:

module.exports

is the value returned by:

require()

So:

module.exports = 100;

means:

const value = require("./math");
// value === 100

It can be any JavaScript value:

module.exports = 100;
module.exports = "Hello";
module.exports = [1, 2, 3];
module.exports = { name: "Ansh" };
module.exports = function () {};
3. require()

require() is used to load another CommonJS module.

const math = require("./math");

Conceptually, Node:

Finds the module.
Loads and executes it.
Gets its module.exports.
Returns that value to require().

Example:

math.js
module.exports = {
  sum: (a, b) => a + b,
  product: (a, b) => a * b
};
app.js
const math = require("./math");

console.log(math.sum(2, 3));
console.log(math.product(2, 3));
4. exports vs module.exports

Initially:

exports === module.exports

is:

true

exports is basically a reference to the same object.

This works
exports.name = "Ansh";

because you're modifying the object.

Equivalent idea:

module.exports.name = "Ansh";
This does NOT replace the export
exports = {
  name: "Ansh"
};

Now exports points to a new object, while module.exports still points to the original object.

Therefore:

require("./file");

still returns module.exports.

Rule to remember
Add properties:
exports.name = "Ansh";

Replace the entire export:
module.exports = { name: "Ansh" };
5. module.id

module.id identifies the current module.

For the main/entry module, Node commonly uses:

console.log(module.id);

Output:

.

For a required module, the ID is generally its resolved filename.

Example:

app.js
math.js

When app.js requires math.js, math.js has its own module information.

6. module.filename

Contains the absolute path of the current module.

console.log(module.filename);

Example:

C:\Backend\project\app.js

This tells you exactly which file the current module represents.

7. module.children

module.children contains the modules that the current module directly required.

Example:

app.js
├── math.js
└── user.js

If app.js contains:

require("./math");
require("./user");

then:

console.log(module.children);

inside app.js contains math.js and user.js.

Important

It contains direct children, not every module in the entire dependency tree.

For example:

app.js
└── math.js
    └── helper.js

app.js has:

math.js

as a child.

It does not directly have:

helper.js

as a child.

8. module.parent

Historically, module.parent referred to the module that first required the current module.

However, module.parent is deprecated in modern Node.js.

For learning CommonJS, focus more on:

module.children
require.main

rather than relying on module.parent.

9. module.isPreloading

This property tells whether the current module is being executed during Node's preload phase.

Example:

node --require ./math.js app.js

Here math.js is loaded before app.js.

math.js
console.log(module.isPreloading);

Output:

true
app.js
console.log(module.isPreloading);

Output:

false
Important

module.isPreloading describes the current module.

It does not mean:

"Was any module preloaded?"

It means:

"Is this module currently being executed as a preloaded module?"

10. What does --require mean?

--require is a Node.js command-line option.

node --require ./math.js app.js

It tells Node to load math.js during the preload phase, before the main program starts.

Short form:

node -r ./math.js app.js

So:

--require

is a Node command-line option, while:

require("./math.js")

is a JavaScript function.

They are related, but they are not the same thing.

11. Normal require() vs Preloading
Normal
node app.js

Then inside app.js:

require("./math.js");

math.js is loaded when execution reaches that require().

So:

module.isPreloading

inside math.js is:

false
Preload
node --require ./math.js app.js

math.js is loaded before app.js.

So inside math.js:

module.isPreloading

is:

true
12. module.paths

This is especially important for understanding how Node finds packages.

console.log(module.paths);

It shows the module search paths associated with the current CommonJS module.

For example:

[
  "C:\\Backend\\project\\node_modules",
  "C:\\Backend\\node_modules",
  "C:\\node_modules"
]

When you write:

require("axios");

Node needs to find the axios package.

It searches the relevant node_modules locations.

Why doesn't Node search Desktop?

Suppose you have:

C:\
├── Backend\
│   └── project\
│       └── app.js
│
└── Users\
    └── You\
        └── Desktop\
            └── node_modules\
                └── axios

Your Desktop node_modules is not on the normal upward search path from:

C:\Backend\project\app.js

So Node doesn't randomly search Desktop.

However, if you put:

C:\node_modules\axios

and C:\node_modules is one of the module search paths, Node can find it.

You can inspect the paths with:

console.log(module.paths);
Important rule

For normal CommonJS package resolution, the relevant search paths shown in module.paths determine where Node looks for packages.

Other mechanisms, such as NODE_PATH, can also affect module resolution.

13. Relative vs Package require()

These two are resolved differently.

Relative module
require("./math");

The ./ means:

Find math relative to the current file.

Package
require("axios");

There is no ./.

Node treats it as a package and searches the appropriate node_modules locations.

14. Main Module

You can identify the main module using:

require.main

For example:

console.log(require.main === module);

Inside the entry file:

true

Inside a module loaded by another file:

false

This is useful when you want to know:

"Is this file the program's entry point?"

15. module vs module.exports

Don't confuse these:

module

and:

module.exports
module

The complete module object provided by Node.

It contains information such as:

module.id
module.filename
module.children
module.paths
module.exports
module.isPreloading
module.exports

The value that the module exports.

module.exports = {
  name: "Ansh"
};

Then another file can receive it:

const data = require("./file");



| Property              | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `module.exports`      | Value exported by the module                           |
| `module.id`           | ID of the current module                               |
| `module.filename`     | Absolute filename of the module                        |
| `module.children`     | Modules directly required by this module               |
| `module.paths`        | Module search paths for the current module             |
| `module.isPreloading` | Whether the current module is executing during preload |
| `module.parent`       | Historical parent-module reference; deprecated         |



| API            | Purpose                                   |
| -------------- | ----------------------------------------- |
| `require()`    | Load another CommonJS module              |
| `require.main` | Reference to the main module              |
| `exports`      | Initially a reference to `module.exports` |



Every CommonJS file gets a `module` object.

module.exports
    The value exported from the module.

require()
    Loads another module and receives its module.exports.

exports
    Initially references module.exports.

module.id
    Identifies the current module.

module.filename
    Gives the current module's absolute filename.

module.children
    Shows modules directly required by the current module.

module.paths
    Shows relevant module-search paths.

module.isPreloading
    Tells whether the current module is executing during Node's preload phase.

--require / -r
    Tells Node to preload a module before the main program.






The most important mental model

module = information about the current module

module.exports = what the current module exports

require() = how another module receives that export

module.paths = where Node looks for packages

module.isPreloading = whether this particular module is currently being preloaded

