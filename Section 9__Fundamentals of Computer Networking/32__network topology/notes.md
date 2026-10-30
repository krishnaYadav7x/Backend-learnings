# Network Topology – Networking Notes

## 1. What is Network Topology?

* Network topology describes how computers, servers, routers, switches and other devices are connected in a network.
* It represents the physical or logical arrangement of devices and connections.
* It helps us understand how devices communicate with each other.

**Simple Example:**

Suppose we have 5 computers.

* How are these computers connected?
* Are they connected to one central switch?
* Are they connected in a circular shape?
* Are they connected through a single cable?

These different arrangements are called **Network Topologies**.

## 2. Why Do We Learn Network Topology?

* To understand how devices are connected in a network.
* To understand how data travels between devices.
* To design efficient networks.
* To understand network performance and reliability.
* To identify possible network failures.
* To understand the advantages and disadvantages of different network structures.

## 3. Types of Network Topology

There are 7 commonly discussed types:

1. Point-to-Point Topology
2. Bus Topology
3. Ring Topology
4. Star Topology
5. Mesh Topology
6. Tree Topology
7. Hybrid Topology

---

## 4. Point-to-Point Topology

* Two devices are directly connected through a dedicated communication link.
* The connection is only between two devices.
* Data travels directly from one device to another.

**Example:**

* Direct connection between two routers.
* A direct connection between two computers.

**Advantages:**

* Simple to establish.
* Fast communication.
* Dedicated connection.

**Disadvantages:**

* Connects only two devices through that link.
* Not suitable for connecting many devices in a single shared network.

## 5. Bus Topology

* All devices are connected to a single main cable called the **Backbone Cable**.
* Data travels through this shared cable.
* All connected devices can receive the transmitted signal, but only the intended device processes the data.
* Terminators are used at both ends of the backbone cable to prevent signal reflection.

**Advantages:**

* Requires less cable.
* Low installation cost.
* Simple for small networks.

**Disadvantages:**

* If the main backbone cable fails, the entire network stops working.
* Performance decreases when many devices communicate.
* Troubleshooting can be difficult.

## 6. Ring Topology

* Each device is connected to two neighboring devices.
* Devices form a circular connection.
* Data travels from one device to another around the ring.
* Some ring networks use a token-passing mechanism to control data transmission.

**Advantages:**

* Organized data transmission.
* Token passing can prevent collisions.
* Predictable access to the network.

**Disadvantages:**

* A single link or device failure can disrupt a basic ring.
* Adding or removing devices can interrupt communication.
* Troubleshooting can be difficult.

## 7. Star Topology

* All devices are connected to one central networking device.
* The central device is usually a switch or hub.
* Devices communicate through this central device.
* It is one of the most commonly used topologies in modern LANs.

**Advantages:**

* Easy to install and manage.
* Easy to add or remove devices.
* Failure of one device or its cable usually does not affect other devices.
* Easy to identify network problems.

**Disadvantages:**

* If the central switch or hub fails, the connected network stops communicating.
* Requires more cables than bus topology.
* Installation cost can be higher.

**Example:**
Computers, printers and servers connected to one central switch.

## 8. Mesh Topology

* Devices are connected to multiple other devices.
* In a full mesh topology, every device has a direct connection to every other device.
* In a partial mesh topology, only some devices have multiple direct connections.
* Provides alternative paths for data transmission.

**Advantages:**

* Highly reliable.
* Provides multiple communication paths.
* Failure of one connection does not necessarily stop communication.
* Good fault tolerance.

**Disadvantages:**

* Requires more cables and connections.
* Expensive to install.
* Complex to manage.
* Full mesh becomes difficult to maintain as the number of devices increases.

## 9. Tree Topology

* Tree topology has a hierarchical structure.
* It combines multiple star networks.
* Devices are connected through different levels of switches.
* A central or root device connects different network branches.

**Advantages:**

* Easy to expand.
* Suitable for large networks.
* Easy to manage different network segments.
* Provides a hierarchical structure.

**Disadvantages:**

* Failure of a central or upper-level device can affect multiple branches.
* Requires more cables and networking devices.
* Configuration and maintenance can be complex.

**Example:**
An organization where one main switch connects multiple departmental switches, and each departmental switch connects computers.

## 10. Hybrid Topology

* Hybrid topology combines two or more different network topologies.
* It is designed according to the requirements of the network.
* It can combine star, bus, ring or mesh topologies.

**Advantages:**

* Flexible network design.
* Easy to expand.
* Can provide better reliability.
* Suitable for large organizations.

**Disadvantages:**

* Expensive to implement.
* Complex network design.
* Requires more maintenance.

**Example:**
An organization uses star topology in different departments and connects those departments through a backbone network.

---

## 11. Quick Comparison

| Topology       | Connection Structure                    |
| -------------- | --------------------------------------- |
| Point-to-Point | Direct connection between two devices   |
| Bus            | All devices share one main cable        |
| Ring           | Devices form a circular connection      |
| Star           | All devices connect to a central device |
| Mesh           | Devices have multiple connections       |
| Tree           | Hierarchical arrangement of devices     |
| Hybrid         | Combination of multiple topologies      |

## 12. Important Concepts

**Physical Topology**

* Describes how devices and cables are physically connected.
* Example: Computers connected to a central switch.

**Logical Topology**

* Describes how data flows between devices in a network.
* Focuses on the communication path rather than the physical arrangement.

## 13. Quick Revision

* Point-to-Point → Direct connection between two devices.
* Bus → One shared backbone cable.
* Ring → Circular connection.
* Star → Central switch or hub.
* Mesh → Multiple connections between devices.
* Tree → Hierarchical structure.
* Hybrid → Combination of different topologies.

**Remember:**

Network topology = Arrangement of devices + Network connections.
