1. 📍 What is a Path?

A path tells the operating system where a file or directory is located.

Example:

C:\Users\kris9\Pictures\Screenshots

It tells the OS:

C: → Users → kris9 → Pictures → Screenshots
2. 🪟 Windows Path System

Windows uses drive letters.

C:\
D:\
E:\

Example:

C:\Users\kris9\Documents\project

Structure:

C:\
└── Users
    └── kris9
        └── Documents
            └── project

Windows commonly uses:

\

as the path separator.

Example
C:\Users\kris9\Desktop
3. 🐧 Linux Path System

Linux does not normally use drive letters such as C: or D:.

Instead, the entire filesystem starts from:

/

This is called the root directory.

Example:

/home/krishna/node/learning

Structure:

/
└── home
    └── krishna
        └── node
            └── learning

Linux uses:

/

as the path separator.

4. 🔥 Windows vs Linux
Windows	Linux
C:\	/
Drive-based	Root-based
\ separator	/ separator
C:\Users\...	/home/...
Multiple drive roots	One main filesystem root
Main idea

Windows organizes paths around drives, while Linux organizes the filesystem under one root /.

5. 🌍 Linux Root /

You can go to the Linux root using:

cd /

Check your location:

pwd

Output:

/

You can then see the top-level Linux directories:

ls

Typical directories:

bin
boot
dev
etc
home
lib
mnt
opt
proc
root
run
sbin
tmp
usr
var
6. 🏠 Home Directory ~

In Bash:

~

means:

The current user's home directory.

For example:

/home/krishna

So:

cd ~

is equivalent to:

cd /home/krishna

Check:

pwd
Useful symbols
/   → filesystem root
~   → user's home directory
.   → current directory
..  → parent directory
7. 🧭 Absolute vs Relative Paths
Absolute Path

A complete path starting from the root/drive.

Linux:

/home/krishna/node/learning

Windows:

C:\Users\kris9\Pictures\Screenshots

It works regardless of your current directory.

Relative Path

A path based on your current location.

Suppose you are here:

/mnt/c/1__cs

and there is a directory:

1_web development

You can do:

cd "1_web development"

You don't need to provide the complete path.

8. .. — Parent Directory

Suppose you're here:

/mnt/c/1__cs/1_web_development

Run:

cd ..

You go to:

/mnt/c/1__cs

So:

.. → one level up
9. 📁 Spaces in Directory Names

Suppose a directory is named:

1_web development

This will cause a problem:

cd 1_web development

Bash interprets it as two arguments:

1_web
development

Therefore:

bash: cd: too many arguments
Correct

Use quotes:

cd "1_web development"

or:

cd '1_web development'

You can also escape the space:

cd 1_web\ development
Best habit

Use Tab completion:

cd 1_

then press Tab.

10. 🐧 WSL — Windows Subsystem for Linux

WSL allows you to run a Linux environment such as Ubuntu inside Windows.

You effectively have access to:

Windows filesystem
        +
Linux/Ubuntu filesystem
11. 🪟 Accessing Windows Drives from WSL

WSL mounts Windows drives under:

/mnt/

Therefore:

Windows C:\ → WSL /mnt/c/
Windows D:\ → WSL /mnt/d/

Example:

C:\Users\kris9\Documents

can be accessed from Ubuntu as:

/mnt/c/Users/kris9/Documents
Example
cd /mnt/c
ls

This lets you explore your Windows C: drive.

12. /mnt/c vs /c

This is important because we also discussed Git Bash.

WSL / Ubuntu
cd /mnt/c
Git Bash
cd /c
Windows
C:\

So:

Windows       → C:\
Git Bash      → /c
WSL Ubuntu    → /mnt/c

/c is not the standard WSL location for the Windows C drive. WSL uses /mnt/c.

13. 🗂️ Two Different Filesystem Areas in WSL

Inside Ubuntu, you can have:

Linux filesystem
/home/krishna
Windows filesystem
/mnt/c/Users/kris9

For example:

Ubuntu
/
├── home
│   └── krishna
│       └── node
│           └── learning
│
└── mnt
    └── c
        └── Users
            └── kris9

These are different filesystem locations.

14. 🧑‍💻 Your Ubuntu Project Location

Your project was inside the Ubuntu filesystem:

/home/krishna/node/learning

You can go there from anywhere using:

cd ~/node/learning

Because:

~ = /home/krishna

Therefore:

~/node/learning

means:

/home/krishna/node/learning
15. 🔍 pwd — Where Am I?

pwd means:

Print Working Directory

Example:

pwd

Output:

/home/krishna/node/learning

This is extremely useful when you're navigating between Windows and Linux filesystems.

16. 📋 ls — What Is Here?
ls

shows files and directories in the current location.

For detailed information:

ls -l

This can show:

permissions
owner
group
size
date
filename
17. 🔗 Symbolic Links

We also saw this:

Application Data@

and:

ls -l

showed something like:

Application Data -> /c/Users/kris9/AppData/Local/

This means Application Data is a symbolic link.

Think of it as:

Application Data
       |
       └──────────→ AppData/Local

It doesn't contain a second copy of the directory.

It points to another location.

Check where a symlink points
readlink "Application Data"
18. @ in ls

Depending on the shell/configuration, you may see:

Application Data@

The @ indicates that the entry is a symbolic link.

ls -l gives more useful information:

Application Data -> /c/Users/kris9/AppData/Local/
19. File vs Directory

We encountered .bashrc.

You tried:

cd .bashrc

and got:

Not a directory

That's because .bashrc is a file, not a directory.

You cannot use:

cd .bashrc

to enter it.

You can read it:

cat ~/.bashrc

or open it in VS Code:

code ~/.bashrc
20. 🪟 Opening Windows Explorer from Ubuntu

explorer alone doesn't work because:

explorer

asks Linux to find a Linux command called explorer.

But Windows has:

explorer.exe

WSL can run Windows executables.

Therefore:

explorer.exe .

means:

Open the current directory using Windows File Explorer.

You can also provide a path:

explorer.exe /mnt/c/Users/kris9/Pictures/Screenshots
21. . with Explorer

If you're currently inside:

/mnt/c/Users/kris9/Pictures/Screenshots

then:

explorer.exe .

means:

Open THIS directory in Windows Explorer.

Because:

. = current directory

This is often easier than typing the whole path.

22. 🧩 Windows Path Inside JavaScript

You had:

const path = "C:\\Users\\kris9\\Pictures\\Screenshots";

This represents:

C:\Users\kris9\Pictures\Screenshots

Why double \\?

Because \ has special meaning inside JavaScript strings.

For example:

"C:\\Users\\kris9"

represents:

C:\Users\kris9

You can also use forward slashes:

const path = "C:/Users/kris9/Pictures/Screenshots";
23. ⚠️ JavaScript Variable vs Bash Variable

This was an important point.

Suppose your JavaScript has:

const path = "C:\\Users\\kris9\\Pictures\\Screenshots";

That variable exists inside your JavaScript program.

It does not automatically exist in your Bash terminal.

Therefore:

explorer.exe path

doesn't mean:

Use my JavaScript path variable.

Bash simply receives:

path

as a literal argument.

24. 🔄 WSL Path Conversion

WSL provides:

wslpath

which can convert between Windows and WSL path formats.

For example:

wslpath -w /mnt/c/Users/kris9/Pictures/Screenshots

converts the Linux/WSL path to a Windows path.

Conceptually:

/mnt/c/Users/kris9/...
            ↓
C:\Users\kris9\...

This is useful when a Windows program expects a Windows-style path.

25. 🪟 Windows Explorer Can Show Ubuntu Files

We also saw Windows Explorer displaying:

Ubuntu > home > krishna

This is possible because WSL exposes its Linux filesystem to Windows.

So Windows Explorer can browse:

Ubuntu
└── home
    └── krishna
        └── learning

while Ubuntu sees the same location as:

/home/krishna/learning
26. 🧠 Important Mental Model

Keep this picture in your mind:

                    WINDOWS
                       │
             ┌─────────┴─────────┐
             │                   │
           C:\                  D:\
             │
             │
          WSL mounts it
             ↓
           /mnt/c

And separately:

                 UBUNTU
                   /
                   │
          ┌────────┴────────┐
          │                 │
        home              etc
          │
       krishna
          │
        node
          │
       learning

So:

/mnt/c

is the Windows C drive from WSL's perspective.

While:

/home/krishna

is your Ubuntu user's home directory.

🧠 Final Things to Remember
/       → Linux filesystem root
~       → current user's home
.       → current directory
..      → parent directory

pwd     → show current location
ls      → list contents
cd      → change directory
cd ~    → go to home
cd /    → go to Linux root
cd ..   → go one level up
Path mapping
Windows:
C:\Users\kris9

WSL:
 /mnt/c/Users/kris9

Git Bash:
 /c/Users/kris9
Most important concept

Windows has drive-based paths (C:\...), Linux has a single root-based filesystem (/...), and WSL connects the two by mounting Windows drives under /mnt/.

This is the foundation you'll need when working with Node.js, file-system APIs, Bash, WSL, Git, and backend development.