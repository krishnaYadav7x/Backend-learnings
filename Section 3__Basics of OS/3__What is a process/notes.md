🧩 What is a Process?

A process is a program that is currently running.

When you open an application, the OS creates one or more processes to execute its work.

📄 Program
    ↓
▶️ Start / Open
    ↓
🧩 Process
    ↓
🧠 CPU + 🧠 Memory

For example:

🌐 Chrome
🎵 Spotify
💻 VS Code
        ↓
⚙️ Operating System
        ↓
🧩 Processes

💡 Program = stored instructions
💡 Process = those instructions being executed

🔢 Process ID (PID)

Every process gets a unique Process ID (PID) from the Operating System.

🌐 Chrome
   ↓
🧩 Chrome Process
   ↓
🔢 PID: 4528

The PID helps the OS and system-monitoring tools identify a specific process.

Example
Process              PID
──────────────────────────
Chrome              4528
VS Code             6312
Spotify             7840

💡 PID = unique identifier of a process.

🧬 Process Instances

One application can have multiple processes/instances.

For example, Chrome may appear as:

🌐 Google Chrome
   ├── 🧩 Process 1
   ├── 🧩 Process 2
   ├── 🧩 Process 3
   ├── 🧩 Process 4
   └── 🧩 Process 5

That's why Task Manager can show something like:

Google Chrome (15)

The 15 indicates that Windows has grouped 15 Chrome-related processes under Chrome.

💡 Opening another tab can cause additional processes or threads to be created, but a new tab does not necessarily mean exactly one new process. Modern browsers use multiple processes for isolation, stability, security, and performance.

🧠 Why Do Applications Use Multiple Processes?

Modern applications, especially browsers, often use multiple processes.

🌐 Chrome
     │
     ├── 🧩 Browser Process
     ├── 🧩 Renderer Process
     ├── 🧩 GPU Process
     ├── 🧩 Network Process
     └── 🧩 Other Processes

This provides benefits such as:

🔒 Isolation & security
💥 One process crashing may not crash the entire application
⚡ Better responsiveness
🧠 Separate resource management
💤 Process States

A process does not always use the CPU.

It can be in different states depending on what it is doing.

🧩 Process
   │
   ├── 🟢 Running
   ├── 🟡 Ready
   └── 💤 Waiting / Sleeping
🟢 Running

The process is currently being executed by a CPU core.

🧩 Process
    ↓
🧠 CPU
    ↓
⚡ Executing
🟡 Ready

The process is ready to run but is waiting for CPU time.

🧩 Process
    ↓
📋 Ready Queue
    ↓
⏳ Waiting for CPU
💤 Waiting / Sleeping

The process is waiting for something, such as:

💾 I/O operation
🌐 Network response
⌨️ User input
⏱️ Timer
🔒 A required resource

It doesn't need to continuously use the CPU while waiting.

💡 Sleeping does not mean the application is closed. It usually means the process is temporarily waiting for something.

⚡ Process and CPU Usage

Suppose you open many applications:

🌐 Chrome
🎵 Spotify
💻 VS Code
💬 WhatsApp
📝 Other Apps
      ↓
⚙️ OS Scheduler
      ↓
🧠 CPU Cores

The OS scheduler decides which ready processes/threads get CPU time.

If there is heavy CPU work:

🧩 Process A ──┐
🧩 Process B ──┤
🧩 Process C ──┼──→ ⚙️ Scheduler → 🧠 CPU
🧩 Process D ──┤
🧩 Process E ──┘
📊 What Does 100% CPU Mean?

If Task Manager shows:

CPU → 100%

it means the available CPU processing capacity is essentially fully utilized at that moment.

For a multi-core CPU, Windows calculates CPU usage across the available logical processors.

💡 100% CPU does NOT mean every application is individually using 100% CPU.

For example:

Chrome       → 40%
VS Code      → 20%
Other Apps   → 40%
──────────────────
Total        → 100%

The actual numbers depend on what the system is doing.

⭐ Process Priority

Windows also gives processes different priority levels.

Priority influences how the scheduler treats competing runnable threads.

🧩 Process
     ↓
⭐ Priority
     ↓
⚙️ Scheduler
     ↓
🧠 CPU

A higher-priority runnable thread may be given preference over a lower-priority one.

⚠️ Important: Priority does not mean a process will permanently get a fixed percentage like 8% CPU. CPU usage depends on the workload, runnable threads, available cores, and scheduler behavior.

👨‍👦 PID vs PPID

A process can also have a Parent Process ID (PPID).

🔢 PID

PID = Process ID

Identifies the current process.

👨‍👦 PPID

PPID = Parent Process ID

Identifies the process that created/started the current process.

👨 Parent Process
      │
      │ creates
      ↓
👶 Child Process

Example:

Process           PID       PPID
────────────────────────────────
Parent            1000       500
Child             1250      1000

Here:

PID 1000 → Parent
PID 1250 → Child
PPID 1000 → Child's parent

💡 PID tells you "Who am I?"
💡 PPID tells you "Who is my parent?"

🔍 System Informer

System Informer is an advanced Windows system-monitoring tool.

It gives much more detailed information about processes than the basic Task Manager.

You can inspect things such as:

🔢 PID
👨‍👦 PPID
⚡ CPU Usage
🧠 Memory Usage
⭐ Priority
🧵 Threads
📁 Process details
🔗 Parent-child relationships
💤 Process activity/state

A simplified view looks like:

                ⚙️ Operating System
                       │
                       ↓
              📋 Process Information
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      🔢 PID          👨‍👦 PPID       ⚡ CPU
        ↓              ↓              ↓
    Process ID    Parent ID       CPU Usage
🔄 Complete Process Flow
📄 Program
    ↓
▶️ User/System starts it
    ↓
🧩 Process is created
    ↓
🔢 OS assigns a PID
    ↓
📅 Scheduler manages it
    ↓
┌─────────────────────────────┐
│                             │
↓                             │
🟡 Ready                       │
↓                             │
🧠 CPU                         │
↓                             │
🟢 Running                     │
↓                             │
🔄 Context Switch              │
│                             │
└──────→ 💤 Waiting/Sleeping ──┘
                 ↓
          Becomes Ready Again
                 ↓
              🧠 CPU
🧠 Remember

🔹 Process → A program that is currently running
🔹 PID → Unique ID of a process
🔹 PPID → ID of the process that created it
🔹 Instance → A running occurrence/process associated with an application
🔹 Running → Currently executing on a CPU core
🔹 Ready → Waiting for CPU time
🔹 Waiting/Sleeping → Waiting for an event/resource
🔹 Priority → Helps the scheduler decide how to treat competing tasks
🔹 CPU 100% → CPU capacity is fully utilized at that moment
🔹 System Informer → Advanced tool for inspecting processes and system activity

🎯 Main Idea: When you open an application, the OS creates and manages one or more processes. Each process has a PID, may have a parent process (PPID), can move between running, ready, and waiting states, and competes for CPU time through the OS scheduler.