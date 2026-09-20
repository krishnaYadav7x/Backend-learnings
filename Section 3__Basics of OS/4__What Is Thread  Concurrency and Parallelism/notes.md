🧵 What is a Thread?

A thread is the smallest unit of execution inside a process.

In simple words:

Process = running program
Thread = a worker inside that program that actually executes tasks

🧠 Example

Suppose you open Chrome:

Chrome (Process)
│
├── Thread 1 → Handles UI
├── Thread 2 → Loads a webpage
├── Thread 3 → Plays video
└── Thread 4 → Handles network requests
So one process can have multiple threads working on different tasks.

Process vs Thread

| Process                      | Thread                                         |
| ---------------------------- | ---------------------------------------------- |
| A running program            | A worker inside a process                      |
| Has its own memory space     | Shares memory with threads of the same process |
| More expensive to create     | Cheaper to create                              |
| More isolated                | Less isolated                                  |
| Can contain multiple threads | Belongs to a process                           |



⚙️ CPU connection
The CPU actually executes threads.

Application
     ↓
   Process
     ↓
   Threads
     ↓
    CPU

For example, if your browser has 5 threads, the OS schedules those threads on the CPU so they can get CPU time.

Remember:

Process is the container; thread is the worker that performs the work.

I can also create an image showing Process → Threads → CPU visually.


🚀 Spawn — simple meaning

Spawn means: “create a new process.”

For example, suppose Node.js is running:



Concurrency: Multiple tasks make progress by taking turns.
Parallelism: Multiple tasks run at the same time on multiple CPU cores.









