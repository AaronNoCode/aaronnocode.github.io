// *  setTimeuot and setInterval

// After a set time period passed or at regular intervals of time

// * setTimeout()
/* Executes a block of code after the specified time has passed
   Syntax: setTimeout(function, milliseconds, param1, param2, ...)
   You can pass multiple or none parameters to the function */
function greet(name) {
    console.log("Hello " + name);
}
// Reference to the function, time in milliseconds and parameter
// setTimeout(greet, 5000, 'John') // Logs Hello Jhon after 5 seconds

// * clearTimeout()
// To clear a timeout (interrupt it) you use clearTimeout() with the id of the timeOut

const timeOutId = setTimeout(greet, 2000, "Aaron");
// This cuts the timeOut above and doesn't execute
clearTimeout(timeOutId);

/* The practical use of this is clearing timeOuts while a component
   is unmounting (being deleted from the interface) to free up memory 
   and it stops executing and avoid memory leaks and poor performance */

// * setInterval()
// Runs the same code repeatedly in regular intervals (forever)
const intervalId = setInterval(greet, 1000, "Andrea");

// * clearInterval()
// As a timeOut, is clearable too (and should be to avoid running something infinitely)
clearInterval(intervalId);

/* Timers and intervals are not part of JS, JS lets us use this functionalities
   which are implemented by the browser and node 
   The duration parameter is the minimum delay, but not guaranteed this means that it will
   run the function when the call stack is free, count X seconds and then log, if the call
   stack is not free, it'll have to wait and there will pass more time. 
   Even when a timeOut has 0 seconds in the time, it doesn't guarantee that the function
   will be run inmidiately */

// * Recursive setTimeout has the same effect as set interval

function foo() {
    console.log(8);
}

/* I tried the following without exploring how to do it 
   but didn't work, as setTimeout doesn't block the execution
   of the code after it (async), the recursive call doesn't wait 
   for the current foo() call inside the timeout to happen before
   invoking the next recursion, and as there's nothing else happening
   in the call stack, the 5 logs happen at the same time after 5 seconds */
/* function recTimeout(counter){
    if(counter > 0) {
        setTimeout(foo,1000);
        recTimeout(--counter);
    } else {
        return
    }
} 
recTimeout(5); */

/* This is a proper recursive Timeout (auto-stopped) which takes an argument 
   for it to stop automatically since the counter is evalutated each recursion */
/* The actual recursive call happens inside the timeout so 
   it is used after the foo() call each second till counter reach zero */
function recursiveTimeout(counter) {
    if (counter > 0) {
        setTimeout(function () {
            foo();
            recursiveTimeout(--counter);
        }, 1000);
    } else {
        return;
    }
}
recursiveTimeout(5); // Logs only 5 times

// This is a recursive timeout that behaves as setInterval (infinite)
setTimeout(function run() {
    console.log(9);
    setTimeout(run, 100);
}, 100);

/* Differences between recursive Timeout and Interval are:
   recursive timeOut doesn't overlap, meaning that the function
   will be run after the timeout ends and when finishes, it 
   will call the next timeout.
   interval does overlap, meaning that it will run the function 
   after the interval has passed and ignoring the time that the code 
   takes to finish it will execute the next call even if the previous
   hasn't finished 
   Example: 
   interval is 1000ms
   function time to end is 3000ms
   after 1sec, the first function call is executed, but the interval will
   perform the second call at second 2 even knowing that the previous 
   call has only worked 1 of 3 seconds it takes to finish, so the results 
   returning from that interval can overlap.
   
   When you need the results to keep a constant flow, is preferred to use 
   a recursive timeout rather than setInterval, if is not important that the results
   overlap, you can use setInterval */
