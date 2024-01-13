// * Functions

/* Block of reusable code available to summon on request
   Function syntax: function name(parameter1, parameter2, parameter3) {}
   Function call syntax: name(argument) */

function greet(userName) {
    console.log("Hello " + userName);
}
greet("Aaron");

function multiply(a, b) {
    return a * b; // Function returning a value
}
console.log(multiply(4, 2));
const result = multiply(9, 8);
console.log(result);

// * Arrow functions
const arrowFunc = (a, b) => {
    return a * b;
};
console.log(arrowFunc(5, 6));

const sameRowArrow = (a, b) => a * b;
console.log(sameRowArrow(7, 8));

// When having just one parameter, can omit the parenthesis (these can show up when formatting)
const noParents = (a) => a + 5;
console.log(noParents(0));
