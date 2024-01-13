// * Scope
// Determines the accessibility or visibility of a variable

// * Block scope
// Variables declared inside a pair of braces {} cannot be accessed from outside these
while (true) {
    const common = 0;
    console.log(common); // Works just fine
    break;
}
console.log(common); // ! Error pops up: unaccessible code or undeclared variable

// * Function scope
function rando() {
    const privateNumber = 6.92742;
    console.log(privateNumber); // Works just fine
}
console.log(privateNumber); // ! Error pops up: undeclared variable

// * Global scope
/* Accessible anywhere in the code, even inside blocks and functions
   But in order to work, it must be defined above the line it is used(invoked) */
console.log(PI); // ! Pops error: variable used before declaration
const PI = 3.14;
console.log(PI); // Works just fine

// Also a global variable will not overwrite the block scope variables:
const important = "original secret";

function foo() {
    const important = "another secret";
    console.log(important); // Logs: another secret
}
