// * Nested function scope

// Here's a global variable
let a = 10;
function outter() {
    // Here's a block level variable
    let b = 20;
    // In JS you can declare a function inside another
    function inner() {
        // And another block level variable but inside the nested function
        let c = 30;
        console.log(a, b, c);
    }
    // Call the inner function inside the function it is declared, otherwise it is not accessible
    inner();
}
inner(); // Pops error: undeclared variable (declared in block scope but trying to use it in global)
outter(); // Outter function call
