# 🧩 What is a Process?

A **process** is a **program that is currently running**.

When you open a program, the Operating System creates and manages one or more processes to execute its work.

```text
📄 Program
    ↓
▶️ Start / Open
    ↓
🧩 Process
    ↓
🧠 CPU + Memory

💡 Program = stored instructions
💡 Process = program currently being executed

🔢 Process ID (PID)

Every running process gets a Process ID (PID) from the Operating System.

The PID is used to identify a specific process.

🌐 Chrome
    ↓
🧩 Chrome Process
    ↓
🔢 PID: 4528
Example
Process	PID
🌐 Chrome	4528
💻 VS Code	6312
🎵 Spotify	7840

💡 PID = identifier used to identify a running process.

🧬 Multiple Processes in One Application

An application can use multiple processes.

Modern browsers like Chrome use multiple processes for different types of work.

🌐 Chrome
   │
   ├── 🧩 Browser Process
   ├── 🧩 Renderer Process
   ├── 🧩 GPU Process
   ├── 🧩 Network Process
   └── 🧩 Other Processes

That's why Task Manager can show something like:

🌐 Google Chrome (15)

The number indicates that Windows has 15 Chrome-related processes grouped under Chrome.

💡 Opening a new tab can cause additional processes or threads to be created, but one tab does not necessarily mean one new process.

Why Multiple Processes?
🔒 Isolation & Security
💥 Better fault isolation — one process crashing may not crash the entire application
⚡ Better responsiveness
🧠 Separate resource management
💤 Process States

A process does not continuously use the CPU.

Depending on what it is doing, it may be:

🧩 Process
   │
   ├── 🟢 Running
   ├── 🟡 Ready
   └── 💤 Waiting
🟢 Running

The process is currently executing on a CPU core.

🧩 Process
    ↓
🧠 CPU
    ↓
⚡ Executing
🟡 Ready

The process is ready to run but is waiting for CPU time.

🧩 Process
    ↓
📋 Ready
    ↓
⏳ Waiting for CPU
💤 Waiting

The process is waiting for something before it can continue.

For example:

💾 Disk / I/O operation
🌐 Network response
⌨️ User input
⏱️ Timer
🔒 Required resource
🧩 Process
    ↓
💤 Waiting
    ↓
📥 Event completes
    ↓
🟡 Ready
    ↓
🧠 CPU

💡 Waiting/Sleeping does not mean the application is closed. It usually means the process currently has nothing useful to execute until some event or resource becomes available.

⚡ Processes and CPU

Suppose many applications are running:

🌐 Chrome
🎵 Spotify
💻 VS Code
💬 WhatsApp
📝 Other Apps
        ↓
⚙️ Operating System
        ↓
📅 CPU Scheduler
        ↓
🧠 CPU Cores

The CPU Scheduler decides which runnable processes/threads should get CPU time.

On a single core, tasks take turns through time slicing and context switching.

On multiple cores, multiple tasks can execute in parallel.

📊 What Does 100% CPU Mean?

If Task Manager shows:

CPU → 100%

it means the available CPU processing capacity is fully utilized at that moment.

For example:

🌐 Chrome      → 40%
💻 VS Code     → 20%
🎵 Other Tasks → 40%
────────────────────
Total          → 100%

💡 100% CPU does not mean every application is using 100% CPU.

CPU usage depends on the workload, number of CPU cores/logical processors, and what the processes are doing.

⭐ Process Priority

The OS uses priority information when scheduling competing runnable work.

A higher-priority runnable thread may receive preference over lower-priority work.

🧩 Process / Thread
        ↓
    ⭐ Priority
        ↓
⚙️ CPU Scheduler
        ↓
     🧠 CPU

⚠️ Priority does not mean a process gets a fixed percentage of CPU.
For example, High Priority does not mean the process will always use 80% CPU.

Actual CPU usage depends on the workload and available CPU resources.

👨‍👦 PID vs PPID

A process can also have a Parent Process ID (PPID).

🔢 PID — Process ID

Identifies the current process.

👨‍👦 PPID — Parent Process ID

Identifies the process that created the current process.

👨 Parent Process
        │
        │ creates
        ↓
👶 Child Process
Example
Process	PID	PPID
Parent	1000	500
Child	1250	1000

Here:

PID 1250  → Child's own ID
PPID 1000 → Child's parent ID

💡 PID = Who am I?
💡 PPID = Who is my parent?

🔍 System Informer

System Informer is an advanced Windows system-monitoring tool.

It provides more detailed process information than the basic Task Manager.

You can inspect information such as:

🔢 PID
👨‍👦 PPID
⚡ CPU Usage
🧠 Memory Usage
⭐ Priority
🧵 Threads
🔗 Parent-Child Relationships
📊 Process Details
                 ⚙️ Operating System
                         ↓
                  📋 Process Information
                         ↓
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
     🔢 PID            👨‍👦 PPID          ⚡ CPU
       ↓                 ↓                 ↓
  Process ID        Parent ID        CPU Usage
🔄 Complete Process Flow
📄 Program
    ↓
▶️ Program Starts
    ↓
🧩 Process Created
    ↓
🔢 OS Assigns PID
    ↓
📅 Scheduler Manages It
    ↓
🟡 Ready
    ↓
🧠 CPU
    ↓
🟢 Running
    │
    ├── 🔄 Context Switch → Another Process
    │
    └── 💤 Waiting → Event/Resource
                         ↓
                      🟡 Ready
                         ↓
                      🧠 CPU
🧠 Quick Revision
🔑 Term	Simple Meaning
🧩 Process	A program that is currently running
🔢 PID	Identifier of a running process
👨‍👦 PPID	ID of the process that created it
🟢 Running	Currently executing on a CPU
🟡 Ready	Ready to run, waiting for CPU time
💤 Waiting	Waiting for an event/resource
⭐ Priority	Helps determine scheduling preference
⚡ CPU 100%	CPU capacity is fully utilized
🔄 Context Switching	Switching CPU execution between tasks
🔍 System Informer	Advanced tool for inspecting processes

🎯 Main Idea:
When a program starts, the OS creates and manages a process. The process gets a PID, can have a parent process (PPID), moves between states such as Ready, Running, and Waiting, and receives CPU time through the OS scheduler.


**Ek important correction:** `Google Chrome (15)` ko strictly **“15 instances