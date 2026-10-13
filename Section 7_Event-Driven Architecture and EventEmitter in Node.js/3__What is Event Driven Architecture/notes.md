##  The Three Components of Event-Driven Architecture



* Event Emitter
* Event
* Event Listener (Event Handler)



1. Event Emitter
- An event emitter is responsible for emitting or announcing an event.

2. Event
- An event represents something that happened.

3. Event Listener (Event Handler)
- An event listener waits for a particular event and responds when it occurs.



 - A user logged in.
 - A file finished downloading.
 - An HTTP request arrived.
 - A payment was completed.





                 WHATSAPP GROUP
             Group: Coding Friends

    Krishna             Rahul             Anshika
       |                   ^                 ^
       |                   |                 |
       | Send message      | Receive message |
       v                   |                 |

                      SERVER                    
                                               
    Receive message                          
    Create message event                     
    Distribute message to group members      

## 1. What is Event-Driven Architecture?

>Event-Driven Architecture (EDA) is a software architecture in which components react to events that occur in the system.