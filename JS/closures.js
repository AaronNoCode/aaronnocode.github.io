// * Closure

/* Combination of a function bundled togheder with references to its surrounding state. 
   These ar ecreated every time a function is created */

function outter() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    // Returns inner function
    return inner;
}
// inner is stored in fn (turning it into a function)
const fn = outter();
fn(); // Logs 1
fn(); // Logs 2

/* By calling fn instead of outter, we bypass the count variable declaration 
   and the value is incremented twice, making the variable information persistant
   and inner is accessible even out of the outter function the variable value 
   is persistent even when the function finished its execution */

/* In JS when we return a function from another function we are returning a 
   combination of the function definition along with the function scope. 
   This lets the function's definition have an associated persistent memory 
   which could hold on to live data between executions. 
   That combination of the function and its scope is what is called closure in JS */
