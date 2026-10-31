# SCP (Secure Copy Protocol)

## 1. What is SCP?

* SCP stands for **Secure Copy Protocol**.
* It is used to securely transfer files between two computers over a network.
* It uses SSH for secure communication.
* Transferred data is encrypted during transmission.
* It is commonly used to transfer files between local computers and remote servers.

## 2. Why Do We Use SCP?

* To upload files from a local computer to a remote server.
* To download files from a remote server to a local computer.
* To transfer files between two remote computers.
* To transfer directories (folders) between computers.

## 3. How SCP Works

* SCP uses an SSH connection.
* The sender establishes a secure connection with the destination.
* The destination authenticates the connection.
* Files are transferred securely over the network.

**Default SSH port:** 22

## 4. SCP Commands

**A. Transfer a file from Local to Remote**

```bash
scp file.txt username@remote-ip:/home/username/
```

* `file.txt` – Local file.
* `username` – Remote computer's username.
* `remote-ip` – Remote computer's IP address.
* `/home/username/` – Destination directory.

**B. Download a file from Remote to Local**

```bash
scp username@remote-ip:/home/username/file.txt .
```

* `.` represents the current local directory.

**C. Transfer an entire folder**

```bash
scp -r folder username@remote-ip:/home/username/
```

* `-r` – Recursively copies directories and their contents.

**D. Transfer using a different SSH port**

```bash
scp -P 2222 file.txt username@remote-ip:/home/username/
```

* `-P` specifies the SSH port.

## 5. SCP vs SSH

| SSH                              | SCP                                |
| -------------------------------- | ---------------------------------- |
| Used for remote terminal access. | Used for file transfer.            |
| Executes commands remotely.      | Copies files between computers.    |
| Provides remote shell access.    | Uses SSH for secure file transfer. |

## 6. Real-World Use Case

Suppose you have an application on your local computer and want to upload it to an AWS EC2 server.

* Use SSH to connect to and manage the server.
* Use SCP to transfer your application files to the server.
* Run your application on the remote server.

## 7. Key Takeaways

* SSH = Remote terminal access.
* SCP = Secure file transfer.
* SCP uses SSH for authentication and encryption.
* SCP supports files and directories.
* Commonly used in remote server management and deployment.
