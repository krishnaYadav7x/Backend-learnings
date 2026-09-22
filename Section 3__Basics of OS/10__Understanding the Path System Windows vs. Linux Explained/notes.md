🛣️ Path System — Windows vs Linux

A path tells the OS where a file or folder is located.

🪟 Windows vs 🐧 Linux
Windows                         Linux

C:\Users\kris9\Desktop          /home/krishna/Desktop
      ↑                              ↑
   Drive                         Root /
Main difference
Windows → drive-based
C:\  D:\  E:\

Linux → root-based
/

Windows uses \, Linux uses /.

🐧 Linux Root & Home
cd /

→ Linux filesystem root.

cd ~

→ Your home directory.

For you:

~  =  /home/krishna

Useful symbols:

/   → root
~   → home
.   → current directory
..  → parent directory
📍 Absolute vs Relative Path

Absolute: complete location.

/home/krishna/node/learning

Relative: location from where you currently are.

If you're here:

/home/krishna/node

then:

cd learning

works.

🪟 Windows Files from WSL

WSL makes Windows drives available under /mnt.

Windows             WSL Ubuntu

C:\             →   /mnt/c/
D:\             →   /mnt/d/

So:

C:\Users\kris9

becomes:

/mnt/c/Users/kris9

Therefore:

cd /mnt/c

takes you to the Windows C: drive.

⚡ WSL vs Git Bash

Don't confuse their path systems:

Windows     → C:\
Git Bash    → /c/
WSL Ubuntu  → /mnt/c/

They are different environments, so their mount paths can be different.

🔗 Symbolic Link

A symbolic link is basically a path that points to another location.

Application Data
       │
       └──────→ AppData/Local

ls -l shows:

Application Data -> /c/Users/kris9/AppData/Local/

It doesn't create another copy of the directory.

📁 Spaces in Paths

Bash treats spaces as separators.

So this:

cd 1_web development

❌ doesn't work.

Use:

cd "1_web development"

or:

cd 1_web\ development
🪟 Opening Windows Explorer from WSL

Windows programs can be launched from WSL using .exe.

explorer.exe .

. means:

Open the current directory.

For a Windows location:

explorer.exe /mnt/c/Users/kris9/Pictures/Screenshots
📜 Windows Path in JavaScript

In JS:

const path = "C:\\Users\\kris9\\Pictures\\Screenshots";

\\ is used because \ has a special meaning inside JS strings.

You can also write:

const path = "C:/Users/kris9/Pictures/Screenshots";
🔥 Most Important Commands
pwd          # Where am I?
ls           # What's here?
cd folder    # Enter folder
cd ..        # Go back one level
cd ~         # Go to home
cd /         # Go to Linux root
cd /mnt/c    # Go to Windows C: drive
🧠 Final Mental Model
                 WSL Ubuntu
                     │
          ┌──────────┴──────────┐
          │                     │
     Linux filesystem       Windows files
          │                     │
     /home/krishna          /mnt/c
          │                     │
     node/learning          Users/kris9

Windows uses drives like C:\, Linux uses one root /, and WSL makes Windows drives accessible through /mnt/.