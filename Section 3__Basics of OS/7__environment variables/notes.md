🌱 Environment Variables

Environment variables are an important concept when working with Operating Systems, processes, terminals, and Node.js.

🧠 What is an Environment Variable?

An environment variable is a key-value pair available to a process.

NAME = VALUE

Examples:

USERNAME = krishna
OS = Windows_NT
NUMBER_OF_PROCESSORS = 12
PATH = C:\Program Files\nodejs;...

A variable can contain a normal value or a path/configuration value.

⚙️ Environment Belongs to a Process

A running process has its own environment.

Computer
│
├── VS Code Process
│     └── Environment
│
├── Chrome Process
│     └── Environment
│
└── Node.js Process
      └── Environment

The environments of different processes are not one shared global environment.

👨‍👦 Parent → Child Environment Inheritance

When a parent process creates a child process, the child normally inherits the environment provided by the parent.

Parent Process
Environment
├── PATH
├── USERNAME
├── MY_VAR
└── ...
       │
       │ inherited when child starts
       ▼
Child Process
Environment
├── PATH
├── USERNAME
├── MY_VAR
└── ...
Important

The child gets the environment when it is created.

It is not continuously synchronized with the parent.

Parent
MY_VAR = hello
     │
     ▼
Child
MY_VAR = hello

Child changes MY_VAR → "bye"

Parent
MY_VAR = hello   ← unchanged

Child environment is independent after process creation.

🔗 Environment Inheritance Chain

Environment can be passed through multiple processes:

Windows / Initial Environment
          ↓
      Git Bash
          ↓
       Node.js
          ↓
    process.env

For example, when you run:

node app.js

Git Bash creates Node, and Node receives the environment available to it.

🟢 process.env in Node.js

Node.js provides the current process's environment through:

process.env

Example:

console.log(process.env);

Access a particular variable:

console.log(process.env.PATH);
console.log(process.env.USERNAME);

If a variable doesn't exist:

console.log(process.env.myName);

Output:

undefined
🖥️ Environment in System Informer

System Informer can show the environment attached to a running process.

node.exe
   │
   └── Environment
        ├── Process
        ├── User
        └── System

This lets you see the environment at the OS/process level, while:

process.env

lets Node.js access that environment from JavaScript.

👤 User vs 🖥️ System Environment

Windows provides environment configuration at different levels.

User Variables

Associated with a particular Windows user.

User
├── TEMP
├── APPDATA
├── USERPROFILE
└── myName
System Variables

Configured at the machine/system level.

System
├── OS
├── NUMBER_OF_PROCESSORS
├── SystemRoot
└── Path

These values can contribute to the environment given to processes.

➕ Creating Environment Variables

You can create your own variables.

For example:

myName = krishna
learning = backend
num = 50

Then Node can access them:

console.log(process.env.myName);
🐚 Using export in Bash

In Git Bash:

export myName="krishna"

Now the current Bash process has:

myName = krishna

A child process created from it can inherit the variable:

Git Bash
myName = krishna
      │
      │ creates
      ▼
Node.js
process.env.myName
      │
      ▼
"krishna"

Check it in Bash:

echo $myName
🪟 Using setx on Windows

You can create a persistent Windows User environment variable from Bash:

setx MY_VARIABLE "hello"

This stores the variable for future processes.

Important:

setx
  ↓
Persistent Windows User Variable
  ↓
New processes can receive it

An already-running process doesn't automatically get the new variable.

⏱️ Why Restarting Matters

Suppose you create:

myName = krishna

while VS Code is already running.

The existing process may still have its old environment.

Windows User Environment
myName = krishna
       │
       │ created later
       ▼
Existing VS Code
       │
       ▼
Existing Terminal
       │
       ▼
Node
       │
       └── myName may be undefined

Starting new processes allows the updated environment to be inherited.

Environment changes generally affect newly created processes, not already-running processes.

📌 PATH

PATH is one of the most important environment variables.

It contains directories where executable programs can be found.

Example:

PATH =
C:\Program Files\nodejs
;
C:\Program Files\Git\cmd
;
...

That's why you can type:

node

instead of writing the complete path to node.exe.

🔥 Why Are We Learning Environment Variables?

Environment variables connect several concepts you're learning:

Operating System
       ↓
     Process
       ↓
    Environment
       ↓
   Child Process
       ↓
   Node.js
       ↓
  process.env

They are also very important in backend development because applications often need configuration such as:

PORT
DATABASE_URL
API_URL
NODE_ENV
API_KEY

Instead of hardcoding configuration directly into source code.

🧠 Remember

An environment variable is a key-value configuration available to a process. Every process has its own environment. When a parent creates a child, the child normally inherits the parent's environment at creation time. The child then has its own environment and can modify it without changing the parent's environment. In Node.js, we access the current process's environment through process.env. We are learning environment variables because they connect OS process management with Node.js and are heavily used for application configuration in backend development.