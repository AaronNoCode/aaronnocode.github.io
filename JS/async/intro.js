/* 
* Bases of async JS

 Timeouts and intervals
 Callbacks
 Promises
 Async/await
 Event loop

* What and why?
 JS is single-threaded, synchronous , blocking language

+ Synchronous
 - code is executed line by line up down
 
+ Blocking
 - code execution is blocked until the current line is not executed
 when app runs in browser and executes an intensive chunk of code without
 returning control to the browser, it can appear to be frozen 
 
+ Single-threaded
 - Each thread can only do one task at a time since it only has one
 
 Problem with this is that the information can take time to arrive
   For asynchronity is not enough JS, we need external tools to write 
   asynchronous code which is where web browsers come to play 
   Web browsers define functions and APIs that allow us to register 
   fucntions that should not be executed asynchronously, and should be 
   invoked async when some kind of event occurs 

Could be passage of time (setTimeout or setInterval), user interaction 
   with the mouse (addEventListener), or the arrival of data over the network 
   (callbacks, promises, async-await) */
