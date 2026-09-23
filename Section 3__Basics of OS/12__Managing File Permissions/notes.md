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













