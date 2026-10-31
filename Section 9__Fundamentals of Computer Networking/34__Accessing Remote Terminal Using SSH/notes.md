# SSH (Secure Shell)

## 1. What is SSH?

* SSH stands for **Secure Shell**.
* It is a network protocol used to securely access and control another computer remotely.
* It allows us to execute commands on a remote computer through a terminal.
* Communication between the SSH client and server is encrypted.

**Example:**

* You have a computer running Ubuntu.
* You can access its terminal from another computer using SSH.
* You can execute commands, manage files, install software and manage the server remotely.

## 2. How SSH Works

SSH uses two main components:

* **SSH Client:** The computer from which we want to access another computer.
* **SSH Server:** The computer that accepts SSH connections.

**Working flow:**

1. SSH client sends a connection request to the SSH server.
2. SSH server verifies the client's authentication.
3. Once authentication succeeds, a secure connection is established.
4. The client can execute commands on the server remotely.

**Default SSH Port:** 22

## 3. SSH Server Installation (Ubuntu)

First, install the SSH server:

```bash
sudo apt update
sudo apt install openssh-server
```

Check SSH server status:

```bash
sudo systemctl status ssh
```

Start the SSH server:

```bash
sudo systemctl start ssh
```

Enable SSH to start automatically when Ubuntu boots:

```bash
sudo systemctl enable ssh
```

Check its status again:

```bash
sudo systemctl status ssh
```

Expected output:

```text
Active: active (running)
```

## 4. Find Your Ubuntu IP Address

To find the IP address of your Ubuntu machine:

```bash
hostname -I
```

My Ubuntu IP address:

```text
172.19.129.118
```

To find the current Ubuntu username:

```bash
whoami
```

My Ubuntu username:

```text
krishna
```

## 5. Connect to Ubuntu Using SSH

I used Windows Command Prompt to access my Ubuntu terminal.

**Command:**

```bash
ssh username@ip-address
```

My command:

```bash
ssh krishna@172.19.129.118
```

* `ssh` – Starts an SSH connection.
* `krishna` – Username of the Ubuntu system.
* `172.19.129.118` – IP address of the Ubuntu system.

### First-Time Connection

When connecting for the first time, SSH asks:

```text
Are you sure you want to continue connecting (yes/no)?
```

* This happens because the SSH client does not recognize the server's host key yet.
* By typing `yes`, I accepted the server's host key.
* SSH saved this key in the `known_hosts` file.
* Future connections can use this saved key to verify the server's identity.

### Authentication

After accepting the host key, SSH asked for my Ubuntu password.

I entered my password and successfully logged in.

Expected output:

```text
Welcome to Ubuntu 26.04.1 LTS
```

**Result:** Successfully accessed my Ubuntu terminal from Windows Command Prompt.

## 6. Firewall Configuration (UFW)

UFW stands for **Uncomplicated Firewall**.

* It manages incoming and outgoing network connections.
* We can allow or block specific ports.
* SSH uses port 22 by default.

Install UFW:

```bash
sudo apt update
sudo apt install ufw
```

Allow SSH connections:

```bash
sudo ufw allow ssh
```

Enable the firewall:

```bash
sudo ufw enable
```

Check firewall status:

```bash
sudo ufw status
```

Expected rule:

```text
22/tcp ALLOW Anywhere
```

Note: Allow SSH before enabling UFW when managing a machine remotely.

## 7. Real-World Use Case: Accessing an AWS Server

SSH is commonly used when working with cloud servers.

For example, suppose I purchase a virtual server from AWS (EC2).

* AWS provides a virtual machine running Ubuntu.
* The server has a public IP address.
* I can connect to that server from my local computer using SSH.
* I can install Node.js, configure Nginx, run backend applications and manage the server remotely.

Example:

```bash
ssh -i my-key.pem ubuntu@PUBLIC_IP
```

Here:

* `-i` – Specifies the private SSH key.
* `my-key.pem` – Private key downloaded when creating the EC2 key pair.
* `ubuntu` – Default username for many Ubuntu EC2 images.
* `PUBLIC_IP` – Public IP address of the AWS server.

AWS also requires the EC2 security group to allow inbound SSH traffic on port 22 from an appropriate source IP.

**Important:** AWS commonly uses SSH key-based authentication instead of password authentication.

## 8. What I Practiced

* Installed and configured the OpenSSH server on Ubuntu.
* Started the SSH service.
* Enabled SSH to start automatically.
* Checked SSH server status using `systemctl`.
* Found the Ubuntu IP address using `hostname -I`.
* Found the Ubuntu username using `whoami`.
* Connected to Ubuntu from Windows Command Prompt.
* Understood first-time host key verification.
* Successfully authenticated using my Ubuntu password.
* Explored UFW firewall configuration.

## 9. Key Takeaways

* SSH allows remote access to another computer through a terminal.
* SSH client initiates the connection.
* SSH server accepts the connection.
* SSH communication is encrypted.
* Default SSH port is 22.
* SSH is widely used to manage cloud servers such as AWS EC2.
* We don't need physical access to a server to manage it.
