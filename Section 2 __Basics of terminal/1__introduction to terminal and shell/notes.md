## the echo command in the terminal, it is used to print text to the terminal.

📍 pwd Command

pwd stands for Print Working Directory.

It tells you which folder/directory you are currently inside.

👤 whoami Command

whoami tells you which user account is currently logged into the terminal.


📂 cd Command

cd stands for Change Directory.

It is used to move from one folder to another in the terminal.



🌳 Root Directory   /

The root directory is the top-most directory of a filesystem.

Think of it as the starting point of the entire folder structure.



/              → Root: entire filesystem 🌳
~              → Home: your personal directory 🏠
.              → Current directory 📍
..             → Parent directory ⬆️

📋 ls Command

ls stands for List.

It is used to show the files and folders inside your current directory.

👀 ls -a

ls -a means List All.

It shows all files and folders, including hidden files.



📋 ls -la

ls -la combines -l + -a.

ls -la
🔑 Meaning
-l → Long format → shows detailed information
-a → All → includes hidden files


📄 touch Command

touch is used to create a new empty file.


📁 mkdir Command

mkdir stands for Make Directory.


🔑 1. cp — Copy

cp stands for copy.

Copy to another folder
cp app.js backup/


🔑 2. mv — Move

mv stands for move.

mv app.js backup/


🔥 mv can also rename files
mv old.txt new.txt


🗑️ Delete Folder
1. Empty folder → rmdir
rmdir folder


2. Folder with files → rm -r
rm -r folder

Example:
rm -r project
This deletes the folder and everything inside it.


cat — view/create file quickly

View a file:
cat app.js


nano — edit a file interactively
nano app.js

Most important commands   //vim modes

i        → start typing (Insert mode)
Esc      → go back to Normal mode

x        → delete one character
dd       → delete current line
u        → undo

:w       → save
:q       → quit
:wq      → save + quit
:q!      → quit without saving


Normal mode  → commands/navigation
Insert mode  → type/edit text
Command mode → save/quit/etc.

The purpose of Vim is to create and edit text/code directly from the terminal.

Think of it like VS Code, but completely keyboard/terminal based.

Why use Vim?
✍️ Edit code/files
📄 Create text files
⚡ Very fast once you learn shortcuts
🖥️ Works inside a terminal/server
🔧 Useful when you don't have a GUI editor available



Prompt = input/instruction given to a system to tell it what to do.











