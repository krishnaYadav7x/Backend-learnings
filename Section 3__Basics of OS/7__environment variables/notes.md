🌱 Environment Variables — Node.js & OS Basics

1. What is an Environment Variable?

An environment variable is a key-value pair provided to a process by its environment.

KEY = VALUE

Example:

PORT = 5000
NODE_ENV = development
USERNAME = krishna

A program can read these values while it is running.

2. Why Do We Use Environment Variables?

Environment variables are mainly used for:

⚙️ Configuration

🔐 Sensitive values such as API keys and passwords

🌍 Environment-specific settings

🛠️ System/tool configuration

Example:

PORT=5000
DB_URL=mongodb://localhost:27017/mydb
API_KEY=abc123

Instead of hard-coding these values directly into the program.

Config = settings that control how an application or system behaves.

3. process.env in Node.js

Node.js provides environment variables through:

process.env

Example:

console.log(process.env);

process.env is an object-like collection of environment variables.

You can access a specific variable:

console.log(process.env.PATH);
console.log(process.env.USERNAME);

If you create:

num=50

and export it from Bash:

export num=50

Node can access it:

console.log(process.env.num);

Output:

50

4. Environment Variables Are Key-Value Pairs

Think of the environment as a collection of:

Key                  Value
────────────────────────────────────────
USERNAME             krishna
OS                   Windows_NT
NUMBER_OF_PROCESSORS 12
PATH                 C:\...\nodejs;C:\...
PS1                  <Bash prompt configuration>

Node exposes these values through:

process.env

5. Parent Process and Child Process

A process is a running program.

When one process starts another process:

Parent Process
      │
      ↓
Child Process

Example:

Git Bash
   │
   │ runs
   ↓
node app.js

Here:

Git Bash → parent

Node.js → child

A child process normally inherits environment variables from its parent.

Git Bash
   │
   │ environment variables
   ↓
Node.js
   │
   ↓
process.env

So if Bash has:

export num=50

and then starts:

node app.js

Node can read:

process.env.num

6. export in Bash

This:

num=50

creates a shell variable.

But to make it available to child processes:

export num=50

Now programs started from that shell can inherit it.

Example:

export num=50
node app.js

Then:

console.log(process.env.num);

Output:

50

7. Temporary vs Persistent Environment Variables

Current Shell Only

export num=50

This affects the current Bash session and processes started from it.

If you close the shell, the variable is normally gone.

Available Whenever Git Bash Starts

Put:

export num=50

inside:

~/.bashrc

Then Bash reads .bashrc when it starts.

You can reload it without reopening Bash:

source ~/.bashrc

After that:

echo $num

gives:

50

8. .bashrc

.bashrc is a Bash startup/configuration file.

It can contain things such as:

export num=50

aliases:

alias source="source ~/.bashrc"

and prompt configuration such as:

PS1="..."

So:

Open Git Bash
      ↓
Bash reads ~/.bashrc
      ↓
Variables/configuration are loaded
      ↓
Shell is ready

9. PS1 — An Environment Variable You Saw

You changed the Git Bash prompt earlier.

PS1 controls the appearance of the Bash prompt.

For example:

export PS1="MY SHELL $ "

The prompt becomes:

MY SHELL $

When Node is started from that Bash environment, PS1 can also appear in:

process.env

So PS1 is an example of a variable used by the shell itself.

10. Three Environment Levels You Observed

In System Informer, you saw:

Process
User
System

These are useful ways to understand where environment values come from.

Process

Process environment = the environment available to a particular running process.

For example, your Node process had variables such as:

PATH
PS1
PWD
SHELL
USERNAME
TEMP

and other values.

This is the environment that the Node process can access through:

process.env

User

User environment variables are associated with your Windows user account.

They are available to applications/processes started for that user.

Example:

MY_VARIABLE = hello

System

System environment variables are machine-wide settings.

They are available to processes running on the system, subject to Windows/user permissions and process creation.

Example:

System PATH

11. What Happens When a Process Starts?

A simplified model:

Windows
   │
   ├── System Environment
   │
   └── User Environment
           │
           ↓
       Shell / Bash
           │
           │ modifies/adds variables
           ↓
       Node.js Process
           │
           ↓
       process.env

The Node process receives an environment for that process.

It can contain values inherited from its parent plus values added/modified by the parent or launcher.

12. What Happened With PATH?

You noticed that PATH did not simply disappear when another PATH value was present.

PATH is a special and very important environment variable.

It contains a list of directories that the shell/OS searches when you run commands.

Example:

C:\Users\kris9\bin;
C:\Program Files\nodejs;
C:\Program Files\Git\cmd

The ; separates Windows PATH entries.

In Bash, you may also modify PATH by adding another directory:

export PATH="$PATH:/new/folder"

This means:

old PATH
   +
new folder

You are adding/concatenating, not replacing the old PATH.

If you instead do:

export PATH="/new/folder"

you replace the current shell's PATH with that value, which can cause commands to stop being found.

Important

The effective PATH seen by a process can contain values originating from the Windows user/system environment and values modified by the shell or launcher.

So the process view shows the environment the process actually received, rather than three completely separate PATH variables.

13. ORIGINAL_PATH

In your Git Bash environment you also saw:

ORIGINAL_PATH

This is useful because Git Bash can modify PATH for its own environment.

Git Bash may keep the original Windows PATH in another variable such as:

ORIGINAL_PATH

So you can think of it as:

Windows PATH
     ↓
Git Bash modifies/prepares PATH
     ↓
Node receives the resulting PATH

The exact variables created by Git Bash can depend on the installation and shell environment.

14. Environment Variables Are Not Files

An environment variable is not a file sitting inside your project.

It is data associated with a running process/environment.

Environment Variable
       ↓
KEY = VALUE
       ↓
Process receives it
       ↓
Node reads it using process.env

.bashrc is a file that can set environment variables when Bash starts, but the variable itself is part of the running shell/process environment.

15. Example: Complete Flow

Bash

export num=50

Start Node

node app.js

Node

console.log(process.env.num);

Result

50

Flow:

.bashrc
   │
   │ export num=50
   ↓
Git Bash
   │
   │ starts
   ↓
Node.js
   │
   ↓
process.env.num
   │
   ↓
"50"

🧠 Final Overview

An environment variable is a key-value setting available to a running process. Its purpose is to provide the process with useful configuration and environmental information without putting every value directly inside the program. You observed that a process's environment can contain many values such as PATH, PS1, PWD, USERNAME, TEMP, processor information, and custom variables you create yourself. These values can come from the Windows User/System environment, from a parent process such as Git Bash, or be added/modified before a process starts. When Git Bash runs node app.js, Node becomes a child process and normally inherits the exported environment from Bash. Node exposes the environment it received through process.env, which behaves like an object of key-value pairs. PATH is a special example because it contains multiple directories and can be extended by concatenating another path rather than replacing the existing value. In short: the environment is information/configuration supplied to a process, and process.env is how Node.js accesses that environment.