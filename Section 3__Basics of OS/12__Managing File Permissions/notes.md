🔐 Linux File Permissions

Linux file permissions control who can read, modify, execute, or access files and directories.

1. Understanding ls -l

When you run:

ls -l p1.md

You may see:

-rw-r--r-- 1 krishna krishna 33 Sep 23 04:52 p1.md

The output contains several pieces of information:

Part	Meaning	Example
-rw-r--r--	File type + permissions	-rw-r--r--
1	Hard link count	1
krishna	Owner/User	krishna
krishna	Group	krishna
33	File size	33 bytes
Sep 23 04:52	Last modified date/time	Date & time
p1.md	File name	p1.md

The most important part for permissions is:

-rw-r--r--
2. Permission Structure

The permission string contains 10 characters:

-rw-r--r--

They are divided into:

Part	Represents	Example
First character	File type	-
Next 3 characters	Owner permissions	rw-
Next 3 characters	Group permissions	r--
Last 3 characters	Others permissions	r--

So:

-rw-r--r--

means:

File type: - → Regular file
Owner: rw- → Read + Write
Group: r-- → Read only
Others: r-- → Read only
File Types
Symbol	Meaning
-	Regular file
d	Directory
l	Symbolic link
Permission Characters
Symbol	Meaning
r	Read
w	Write
x	Execute
-	Permission not granted
3. Changing Permissions with chmod

chmod means change mode. It is used to change file and directory permissions.

Add Permissions
chmod +x p1.md
chmod +w p1.md
chmod +r p1.md
Remove Permissions
chmod -x p1.md
chmod -w p1.md
chmod -r p1.md

You can also specify who should get or lose the permission.

Symbol	Meaning
u	User / Owner
g	Group
o	Others
a	All
Examples

Add execute permission to the owner:

chmod u+x p1.md

Add execute permission to the group:

chmod g+x p1.md

Remove write permission from others:

chmod o-w p1.md

Give everyone execute permission:

chmod a+x p1.md
4. Numeric Permissions

Permissions can also be represented using numbers.

Permission	Value
r	4
w	2
x	1

You combine these values to create a permission number.

Permission	Calculation	Value
rwx	4 + 2 + 1	7
rw-	4 + 2	6
r-x	4 + 1	5
r--	4	4
-wx	2 + 1	3
-w-	2	2
--x	1	1
---	0	0
Example: chmod 644
chmod 644 p1.md

The three digits represent:

Digit	Applies to	Permission
6	Owner	rw-
4	Group	r--
4	Others	r--

So:

644 → rw-r--r--

Result:

-rw-r--r--
More Examples
chmod 744 p1.md

Result:

-rwxr--r--
chmod 766 p1.md

Result:

-rwxrw-rw-
chmod 244 p1.md

Result:

--w-r--r--

Because:

2 → -w-
4 → r--
4 → r--
5. File vs Directory Permissions

Permissions behave differently for files and directories.

📄 File Permissions
Permission	Meaning
r	Read file contents
w	Modify file contents
x	Execute the file

For example:

-rwxr--r--

The owner can:

Read the file
Modify the file
Execute the file
📁 Directory Permissions
Permission	Meaning
r	List directory contents
w	Create, delete, or rename entries
x	Enter/traverse the directory

The meaning of x is different for a directory.

For a file:

x → Execute the file

For a directory:

x → Access/traverse the directory
6. File vs Parent Directory Permissions

One of the most important concepts in Linux permissions is:

Deleting a file depends mainly on the permissions of its parent directory, not the file itself.

Consider:

parent/
└── child.html

If the parent directory does not have write permission:

chmod u-w parent

Then:

rm parent/child.html

may result in:

Permission denied

Why?

Because deleting a file means removing its entry from the parent directory.

Remember
Permission	Controls
File w	Modifying the file's contents
Directory w	Creating, deleting, or renaming entries

So:

File's `w`
→ Modify file contents

Parent directory's `w`
→ Create / Delete / Rename entries
7. Directory Permissions in Practice

To check the permissions of a directory itself:

ls -ld src

Example:

drwxr-xr-x 2 krishna krishna 4096 Sep 23 04:59 src

The first character is:

d

which means it is a directory.

Remove Write Permission
chmod u-w src

Permissions become:

dr-xr-xr-x
Add Write Permission Back
chmod u+w src

Permissions become:

drwxr-xr-x
ls -l vs ls -ld
ls -l src

Shows the contents inside src.

ls -ld src

Shows the directory itself.

So when you want to inspect the permissions of the directory itself, use:

ls -ld src
8. Execute Permission

Execute permission allows a file to be executed when it is actually an executable program or script.

For example, suppose you have a shell script:

script.sh

Initially:

-rw-r--r--

Trying to run:

./script.sh

may give:

Permission denied

Add execute permission:

chmod u+x script.sh

Now:

-rwxr--r--

You can run:

./script.sh

⚠️ Adding x permission does not magically turn any file into a valid executable. The file must contain executable code, such as a binary or a script with a suitable interpreter.

9. Checking Permissions with stat

You can get detailed information about a file using:

stat p1.md

Example output may contain:

File: p1.md
Size: 33
Access: (0644/-rw-r--r--)

Here:

0644

represents the permission mode.

The important three digits are:

6 → Owner
4 → Group
4 → Others
🧠 Quick Reference
📄 File
r → Read contents
w → Modify contents
x → Execute
📁 Directory
r → List contents
w → Create / Delete / Rename entries
x → Enter / Traverse / Access
🔑 Permission Cheat Sheet
r = 4
w = 2
x = 1

Common combinations:

rwx = 7
rw- = 6
r-x = 5
r-- = 4
-wx = 3
-w- = 2
--x = 1
--- = 0
Common Permission Modes
Mode	Permissions
644	rw-r--r--
755	rwxr-xr-x
744	rwxr--r--
700	rwx------
⭐ Most Important Things to Remember
ls -l → Check file permissions.
ls -ld → Check a directory's own permissions.
chmod → Change permissions.
r = 4, w = 2, x = 1.
File r → Read contents.
File w → Modify contents.
File x → Execute the file.
Directory r → List contents.
Directory w → Create, delete, or rename entries.
Directory x → Traverse/access the directory.
File w and directory w have different purposes.
Adding x does not automatically make an arbitrary file a valid executable.

The key idea:
File permissions control what you can do with the file, while directory permissions control what you can do with the entries inside the directory.