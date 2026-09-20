# ⚙️ What is a Kernel?

A **Kernel** is the **core part of an Operating System (OS)**.

It acts as a bridge between **software and hardware**.

```text
💻 Applications
       ↓
⚙️ Kernel
       ↓
🖥️ Hardware
🧠 What Does the Kernel Do?
🧠 Manages Memory
⚡ Manages CPU
🔄 Manages Processes
📁 Helps Manage Files
⌨️ Communicates with Hardware Devices

💡 In one line: The Kernel is the core of the OS that manages hardware and allows software to use it.

🔄 Context Switching

When multiple applications are running, the Operating System (OS) manages which process gets CPU time.

Think of the OS as a middleman between applications and the processor.

💻 APPLICATIONS
      │
      │  Requests CPU time
      ↓
⚙️ OPERATING SYSTEM
      │
      ├── 📅 CPU Scheduler
      │
      └── 🔄 Context Switching
      │
      ↓
🧠 PROCESSOR / CPU
      │
      └── ⚡ Executes instructions
⏱️ What Happens on a Single Core?

Suppose these applications are running:

🌐 Chrome
🎵 Spotify
💻 VS Code

But the computer has only one CPU core.

A single CPU core can execute one instruction stream at a time.

So the OS gives different processes/threads small amounts of CPU time.

🧠 CPU Core

Chrome → Spotify → VS Code → Chrome → Spotify → VS Code
   ↑         ↑         ↑
   │         │         │
 Small     Small     Small
 time      time      time
 slice     slice     slice

This happens extremely quickly, so it looks like all applications are running at the same time.

🔄 What is Context Switching?

Context switching means switching the CPU from one process/thread to another.

Before switching, the OS saves the current task's execution state and then loads the next task's state.

🧩 Chrome
    ↓
💾 Save Chrome's state
    ↓
🔄 Context Switch
    ↓
📂 Load Spotify's state
    ↓
🧩 Spotify runs

Later:

🧩 Spotify
    ↓
💾 Save Spotify's state
    ↓
🔄 Context Switch
    ↓
📂 Load Chrome's state
    ↓
🧩 Chrome continues

This allows Chrome to continue from where it left off.

💡 The CPU is not physically "taking out" one application and putting another one inside.
The CPU executes instructions from different processes/threads, while the OS manages the switching.

⚡ How Does It Switch So Fast?

The OS gives runnable processes/threads small time slices.

🧠 CPU Core

| Chrome | Spotify | VS Code | Chrome | Spotify | VS Code |
    ↑         ↑         ↑
  Small     Small     Small
  slice     slice     slice

The switching happens very quickly:

Chrome
   ↓
🔄
Spotify
   ↓
🔄
VS Code
   ↓
🔄
Chrome
   ↓
🔄
Spotify
   ↓
...
👀 What We See
🌐 Chrome + 🎵 Spotify + 💻 VS Code
                ↓
       "Everything is running!"
🧠 What the CPU Is Actually Doing
Chrome → Spotify → VS Code → Chrome → Spotify → ...
   🔄         🔄         🔄         🔄
🎯 Complete Flow
💻 Applications
       ↓
🧩 Processes / Threads
       ↓
⚙️ Operating System
       ↓
📅 CPU Scheduler
       ↓
⏱️ Time Slice
       ↓
🔄 Context Switch
       ↓
🧠 CPU Core
       ↓
⚡ Execute Instructions
       ↓
🔄 Context Switch
       ↓
🧠 Another Process/Thread
       ↓
      ...
🧠 Remember
💻 Apps
   ↓
⚙️ OS / Kernel
   ↓
📅 Scheduler
   ↓
⏱️ Time Slice
   ↓
🧠 CPU
   ↓
⚡ Execute
   ↓
🔄 Context Switch
   ↓
🧠 Another Task
   ↓
      ...

🚀 Main Idea: Even with a single CPU core, multiple applications can appear to run simultaneously because the OS rapidly schedules tasks, gives them small time slices, and performs context switching.


### ✨ One important correction

Instead of writing:

> `OS manages which application gets CPU time`

for technical notes, **`OS manages which process/thread gets CPU time`** is better.

Because **Chrome is an application**, while the CPU actually executes instructions belonging to its **processes/threads**.

This version will also be much cleaner visually because **every ASCII diagram is inside a `text` code block**, so GitHub won't crush the spacing or put everything on one line.