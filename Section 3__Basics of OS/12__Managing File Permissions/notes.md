📄 Linux File Permissions

When you run:

ls -l p1.md

you get:

-rw-r--r-- 1 krishna krishna 6 Sep 23 04:43 p1.md

Read it from left to right:
| Part           | Meaning                 | Example                       |
| -------------- | ----------------------- | ----------------------------- |
| `-rw-r--r--`   | Permissions             | File + read/write permissions |
| `1`            | Hard link count         | `1`                           |
| `krishna`      | Owner/User              | Who owns the file             |
| `krishna`      | Group                   | Group that owns the file      |
| `6`            | File size               | 6 bytes                       |
| `Sep 23 04:43` | Last modified date/time | When file was modified        |
| `p1.md`        | File name               | Name of the file              |


🔐 Permission part

-rw-r--r--
│├──┤├──┤├──┤
│  │   │   │
│  │   │   └── Others
│  │   └────── Group
│  └────────── Owner
└───────────── File type


-rw-r--r--
│
└── `-` = regular file

rw- = owner → read + write
r-- = group → read only
r-- = others → read only




🔐 Linux File Permissions

Linux file permissions control who can read, modify, execute, or access files and directories.

1. Permission Structure

When you run:

ls -l p1.md

You may see:

-rw-r--r-- 1 krishna krishna 33 Sep 23 04:52 p1.md

The permission part:

-rw-r--r--
│├──┤├──┤├──┤
│  │   │   │
│  │   │   └── Others
│  │   └────── Group
│  └────────── Owner
└───────────── File type
File Type
-  → Regular file
d  → Directory
l  → Symbolic link
Permissions
r → Read
w → Write
x → Execute

For example:

-rw-r--r--
 │  │  │
 │  │  └── Others  → r--
 │  └───── Group   → r--
 └──────── Owner   → rw-
2. Changing Permissions with chmod

chmod means change mode.

Add Permissions
chmod +x p1.md
chmod +w p1.md
Remove Permissions
chmod -x p1.md
chmod -w p1.md
Specify Who Gets the Permission
Symbol	Meaning
u	User/Owner
g	Group
o	Others
a	All

Examples:

chmod u+x p1.md
chmod g+x p1.md
chmod o-w p1.md
3. Numeric Permissions

Each permission has a numeric value:

Permission	Value
r	4
w	2
x	1

Combine them:

rwx = 4 + 2 + 1 = 7
rw- = 4 + 2     = 6
r-x = 4 + 1     = 5
r-- = 4         = 4
-w- = 2
--x = 1
--- = 0
Example: chmod 644
chmod 644 p1.md
  User   Group   Others
    ↓      ↓       ↓
    6      4       4

   rw-    r--     r--

Result:

-rw-r--r--
More Examples
chmod 744 p1.md
-rwxr--r--
chmod 766 p1.md
-rwxrw-rw-
chmod 244 p1.md
--w-r--r--

Because:

2 → -w-
4 → r--
4 → r--
4. File vs Directory Permissions

The meaning of permissions is different for files and directories.

📄 File
Permission	Meaning
r	Read file contents
w	Modify file contents
x	Execute the file
📁 Directory
Permission	Meaning
r	List directory contents
w	Create, delete, rename entries
x	Enter/access the directory

Important: Deleting a file depends on the permissions of its parent directory, not the file itself.

Example:

parent/
└── child.html

If you remove w from parent:

chmod u-w parent

then:

rm parent/child.html

will give:

Permission denied

because parent does not allow changes to its contents.

5. Directory Permissions in Practice

To see the permissions of the directory itself:

ls -ld src

Example:

drwxr-xr-x 2 krishna krishna 4096 Sep 23 04:59 src

Remove owner's write permission:

chmod u-w src

Result:

dr-xr-xr-x

Add it back:

chmod u+w src

Result:

drwxr-xr-x
Why ls -ld?
ls -l src

→ Shows the contents of src.

ls -ld src

→ Shows the permissions of src itself.

6. Execute Permission Example

Initially:

-rw-r--r--

Running:

./p1.md

gives:

Permission denied

Add execute permission:

chmod u+x p1.md

Now:

-rwxr--r--

and:

./p1.md

can execute the file.

7. Checking Permissions

For a file:

ls -l p1.md

For a directory itself:

ls -ld src

You can also use numeric notation:

pstat p1.md

Example:

-rwxr--r-- 744 p1.md
🧠 Remember
FILE
r → read contents
w → modify contents
x → execute


DIRECTORY
r → list contents
w → create/delete/rename contents
x → enter/access
⭐ Most Important Rule

The permissions of a directory control what you can do to the entries inside it.

So:

File's w
   ↓
Modify the file

Parent directory's w
   ↓
Create / Delete / Rename the file








