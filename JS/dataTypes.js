/* CRASH COURSE
   "Compiled" with JIT (dynamically typed language), runs in the JVM, 
   ECMAScript spec implies that our code will run in any browser
   alongside HTML and CSS is one of the core tech in the WWW
   JS can be run outside the browser (server) and can generate a fullstack app only with it 
   can be used also to generate iOS and android apps (react-native) and desktop (electron) 
   You can run JS in the browser or in node.js runtime, also in bun and deno atm */

// Standard variable
let age = 25;

// Unalterable variable (must be initialized upon creation)
const salary = 1000;

let sum = 0;
// This can be reassigned
sum = 5;

/// Data types
/* Primitives 
      string
      number
      boolean
      undefined (non assigned value)
      null (equals nothing)
      bigInt
      symbol 
   Non-primitives
      objects */

// String allows single and double quotes, backticks as well
const myString = 'nothing';
const mySecondString = "nothing again";
const myThirdString = `nothing once again`;

const number = 34;

const bool = true;
const secondBool = false;

// Undefined
let resultDeclared = undefined;
let result;
// console.log(result); Logs undefined

// Null represent empty or non-value
const data = null;

/* The difference is that null is used to define a null value
   and undefined is for a value that is NOT YET defined
   If you want to assign a value to something that is not yet 
   defined, is ideal to use null, NOT undefined */

/* BigInt is relatively new and is used to store a larger 
   integer value than the normal int can hold */

// Symbol is used for a value tath is unique and unchangeable 

/* Object is a collection of values, complex data types and is 
   structured with key-values pairs contained within itself */

/* Values inside of it can only be strings or symbols (data type)
   If a value doesn't contains a hyphen (-) you can omit the quotes, 
   if you put: jay-jay, it will pop an error, should be 'jay-jay' */
const person = {
   firstrep: 'Jason',
   lastname: 'The Killer',
   'first-alias': 'Little Jay',
   age: 56
};
// console.log(person.age) Logs 56

// Array 
const myArr = [5, 6, 4, 8, 2, 6];
// console.log(myArr[1]); Average array index accessing 

let a = 30;
a = 'purrfect';
a = null;
a = true;
// console.log(a); Logs the latest assignment of the variable (true) and doesn't throw an error
