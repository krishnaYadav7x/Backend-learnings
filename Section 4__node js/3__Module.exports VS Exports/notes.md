

1. module.exports

This is the actual value that require() returns.

module.exports = { name: "Ansh" };

Then:

const user = require("./user");

console.log(user);
// { name: "Ansh" }
2. exports

exports is initially just a shortcut/reference to module.exports.

Initially:

exports === module.exports
// true

So this works:

exports.name = "Ansh";
exports.age = 20;

Because you're modifying the same object:

module.exports
// { name: "Ansh", age: 20 }
⚠️ The important difference

This works:

exports.name = "Ansh";

But this can cause a problem:

exports = {
  name: "Ansh"
};

Why?

Because now exports points to a new object, while module.exports still points to the original object.

Initially:

exports ─────────┐
                 ├──> module.exports ──> {}
                 

After exports = {...}:

exports ───────────────> { name: "Ansh" }

module.exports ────────> {}

And remember:

require() returns module.exports, not exports.

🧠 Easy rule
module.exports → actual thing returned by require()

exports        → shortcut/reference to module.exports

Therefore, when you want to replace the entire exported value:

module.exports = function () {};

When adding properties:

exports.name = "Ansh";

For now, while learning CommonJS, it's safest to think of module.exports as the real export and exports as its shortcut.