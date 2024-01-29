// * Callbacks

/* In JS the functions are first class objects, 
   which means that they can be passed as arguments 
   to a function and can be returned as values from other 
   functions */ 

// You create a function to do an especific task (just for example) 
function secretSauce(a) {
    const sauce = 'Worchestershire sauce';
    console.log(a + ' with ' + sauce);
}
// Then add the utility function to a function as argument 
// This one is called a high order function, as it recieves another function as argument 
// (would be named the same way if also returns a function)
function prepareDishWithSauce(sauceFn){
    const meat = 'Steak';
    // Use the function as a callback
    sauceFn(meat);
}
// In this case you could have multiple functions to add different sauces to the dish
prepareDishWithSauce(secretSauce); // Steak with Worchestershire sauce


// * Why callbacks?

// * Synchronous callbacks
/* Callback is executed immediately */

// Connect is the callback argument, it defines the logic that the higher order function delegates
function connect(route){
    console.log('Connected to ' + route)
}

function ports(attempt){
    const portToConnect = '3000'
    // The callback is executed with no delay
    connect(portToConnect)
}

ports(connect);


// * Asynchronous callbacks
/* Often used to resume code execution after a completed async operation 
   Callbacks are used to delay the execution of a function until some time or 
   event has occured (run when something is being fetched) */

function rando(name){
    console.log(name*5)
}
// Callback is executed after the timeout
setTimeout(rando, 5000, 'Aaron')


function callback(){
    document.getElementById('rando').innerHTML = 'Get to work'
}
// Callback is executed after the event has happened, not instantly
document.getElementById('rando').addEventListener('click',callback);


/* If you have too many callbacks and everyone depend on the previous callback, 
   you start nesting into oblivion (callback hell) and the code becomes difficult to read and maintain */

/* Summary
   Callbacks are function passed as arguments to another functions
   Can be synchronous and asynchronous (after some time or event like click or data fetching)
   After too many callbacks, callback hell was born 
   The recommended aproach to this are the usage of Promises */

