1. What is an Environment Variable?

An environment variable is a key-value pair available to a process.

PORT=5000
NODE_ENV=development
DB_PASSWORD=secret

In Node.js, we access them through:

process.env.PORT
process.env.NODE_ENV

Environment variables belong to a process.

2. Why Do We Need Them?

The main purpose is to keep configuration outside the code.

Instead of:

const PORT = 5000;

use:

const PORT = process.env.PORT;

Now the same application can run with different configurations:

Development → PORT=5000
Production  → PORT=8080
Common uses
🔧 Configuration — PORT, NODE_ENV
🔐 Secrets — database passwords, API keys
🌍 Different development/production settings
🚀 Deploying the same code to different environments
3. Parent → Child Environment

When a child process is created, it generally inherits a copy of the parent's environment.

        Parent Process
        PORT=5000
        MODE=dev
             │
             │ environment
             ▼
        Child Process
        PORT=5000
        MODE=dev

The child receives its own copy.

Therefore:

Parent → Child     ✅
Child → Parent     ❌

If the child changes:

process.env.PORT = "8000";

the parent's PORT is not changed.

4. Each Process Has Its Own Environment

An application can have multiple processes:

Application
│
├── Process A → Environment A
├── Process B → Environment B
└── Process C → Environment C

They may initially have the same values because they inherited them from a parent, but each process has its own environment.

5. Setting Variables in Bash
Temporary variable for a command
day=21sep node app.js

day is available to that Node process.

It does not permanently add day to the parent shell.

Export to child processes
export day=21sep

Now child processes started from that shell can inherit it.

Check:

echo $day
6. env Command
Remove one variable before starting a child
env -u day node app.js

This means:

Start Node without passing day.

Start with an empty environment
env -i node app.js

-i → ignore the existing environment.

7. process.env in Node.js

Node exposes the process environment through:

process.env

Example:

console.log(process.env.PORT);

You can also add/change a variable inside the current Node process:

process.env.day = "21sep";

This affects the current process only.

It does not modify the parent terminal's environment.

8. User vs System Environment Variables

Windows has two important levels:

User Variables
     +
System Variables
     ↓
Environment available to processes
User variable

Stored in:

HKCU\Environment

Using reg:

reg add "HKCU\Environment" /v myName /t REG_SZ /d krishna /f

Delete:

reg delete "HKCU\Environment" /v myName /f
System variable

Stored in:

HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment

Requires Administrator privileges to modify.

9. Same Variable in User + System

If the same variable exists at both levels, Windows uses the User value for the process environment.

Example:

User:
isCoding=true

System:
isCoding=yeah

Node:

console.log(process.env.isCoding);

Output:

true
10. .env File

A .env file is commonly used to keep application configuration in one place:

PORT=5000
DB_PASSWORD=secret
NODE_ENV=development

Your application can load these values into process.env.

Conceptually:

.env
 │
 ▼
process.env
 │
 ▼
Application

⚠️ .env files containing secrets should generally not be committed to GitHub.

.env
🧠 Big Picture
       OS / Shell / Parent Process
                  │
                  │ Environment
                  ▼
             Node Process
                  │
                  ▼
             process.env
                  │
          ┌───────┴────────┐
          ▼                ▼
     Configuration       Secrets
          │
          ▼
     Application
🔑 Remember

Environment variables provide external configuration to a process.

The most important relationship is:

Parent Process
      │
      │ inherits environment
      ▼
Child Process
      │
      ▼
process.env

Parent → Child inheritance happens when the child starts, but changes made by the child do not automatically travel back to the parent.

This is why environment variables are useful: the same application code can run in different environments simply by changing its configuration.