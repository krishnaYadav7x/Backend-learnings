Wrapper function = a function used to contain other code, usually to provide scope, setup, or extra functionality around that code.


                 Node.js
                    
                    
        ┌──────────────────────┐
        │ Module Wrapper        │
        │                      │
        │ (exports, require,   │
        │  module, __filename, │
        │  __dirname)          │
        │                      │
        │    Your code         │
        └──────────────────────┘
                    
                    
              Execute module


1. Prevent variables from leaking globally

Suppose a.js has:

const name = "Anshika";

And b.js has:

console.log(name);

b.js cannot directly access name.

That's because Node effectively does:

(function (exports, require, module, __filename, __dirname) {
    
    const name = "Anshika";

});

name is therefore local to that function.

Without the wrapper, module variables could potentially share the same scope, causing conflicts.

2. It gives every module its own scope

Think of each module as having its own private room:

a.js
┌─────────────────────────┐
│ function scope          │
│                         │
│ const name = "Anshika"  │
└─────────────────────────┘

b.js
┌─────────────────────────┐
│ function scope          │
│                         │
│ const name = "Rahul"    │
└─────────────────────────┘

Both can have a variable called name without conflicting.

3. It provides require, module, and exports

These aren't ordinary global variables that you created.

Node makes them available through the wrapper:

(function (exports, require, module, __filename, __dirname) {

    // You can use these here

});

So when you write:

const math = require("./math");

require is available because Node passes it into the wrapper.

Similarly:

module.exports = {
    add
};

works because Node provides the module object.

4. It provides module information

Node passes:

__filename
__dirname

into the wrapper so the module knows:

Which file am I?
Where is my directory?