🪄 How Commands Are Executed in Bash

When you type:

node

it looks simple, but Bash goes through a command-resolution process.

1. 🔍 Command Lookup

Bash roughly checks:

You type a command
        │
        ▼
     Alias?
     /    \
   Yes     No
    │       │
 Execute    ▼
         Function?
         /      \
       Yes       No
        │         │
     Execute      ▼
             Shell Built-in?
              /          \
            Yes           No
             │             │
          Execute          ▼
                    Hash Table?
                     /       \
                  Found     Not Found
                    │           │
                 Execute        ▼
                          Search PATH
                               │
                               ▼
                           Executable
                               │
                               ▼
                              OS
                               │
                               ▼
                            Process
⭐ Remember
Alias → Function → Built-in → Hash → PATH → Executable → OS
2. 🏷️ Alias & Function

An alias replaces a command:

alias ll="ls -la"

A function is a shell-defined command:

hello() {
    echo "Hello"
}

If both have the same name, the alias takes priority when executing the command.

3. ⚙️ Built-in Commands

Some commands are built directly into Bash:

cd
pwd
echo
export

Check:

type cd

Output:

cd is a shell builtin

That's why:

which cd

doesn't find an executable cd.

4. 🛣️ PATH

PATH is an environment variable containing directories where Bash searches for executables.

echo "$PATH"

Example:

/usr/bin:/bin:/c/Program Files/nodejs

When you type:

node

Bash can search these directories and find Node.

5. 📦 Installation & PATH

When you install Node.js, its installer can:

Install Node files
       +
Add Node's directory to PATH

So:

node

works from different directories.

A random downloaded file doesn't automatically get added to PATH.

6. 🧠 Hash Table

Bash can remember where it previously found an external command:

node → /c/Program Files/nodejs/node

This is the hash table.

See it:

hash

See a specific entry:

hash -t node

Clear it:

hash -r
PATH vs Hash
PATH  → Where Bash can search
Hash  → Where Bash remembers it found something
7. 🔎 which vs type
which node

→ Helps find the executable through PATH.

type node

→ Tells you what kind of command Bash recognizes.

For example:

type cd
# cd is a shell builtin
8. 🧩 Node vs pwd

They don't necessarily execute the same way.

node
node
 ↓
Find executable
 ↓
OS
 ↓
Node process
pwd
pwd
 ↓
Bash recognizes builtin
 ↓
Bash executes it

And:

node pwd

is different from:

node
pwd

The first is one command where pwd is an argument to Node.

🎯 Purpose of Learning This

The purpose is to understand what happens behind the simple commands you type every day. You are learning how the terminal, Bash, aliases, functions, built-ins, hash table, PATH, executables, OS, and processes connect together. This foundation will make Node.js and backend concepts much easier because you'll understand what is actually happening underneath the commands you run.