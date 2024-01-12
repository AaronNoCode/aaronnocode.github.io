// * Assignment operators
let x = 10;
let y = 5;

// * Arithmetic operators
let a = x + y;
a = x - y;
a = x * y;
a = x / y;
a = x % y;
a = x++;
a = y--;

// * Comparison operators (return bool)
a == x; // (false)
a != x; // (true)
a > x; // (false)
a >= x; // (false)
a < x; // (true)
a <= x; // (true)
// Compares not only the value but the data type of the variables
a === x; // (false)
a !== x; // (true)

// * Logical operators
// AND
let b = x > a && a > y; // console.log(valid) (false)
// OR
b = x > a || a > y; // console.log(valid) (true)
// NOT
b = !true; // console.log(valid) (false)

// * String operators
// Concatenate
let c = "not" + "now";

// * Other operators
// Ternary (yessss)
let number = 23;
let isEven = number % 2 === 0 ? true : false; // false

isEven = number % 2 === 0 ? "Number is even" : "Odd"; // Can assign any value
// console.log(isEven) (Odd)
