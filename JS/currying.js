// * Currying

/* Process in functional programming where a function with multiple parameters 
   is separated into a sequence of nesting functions that take one argument at a time 
   f(a,b,c) -> f(a)(b)(c) 
   Currying doesn't call function, only spits it */

function rando(a, b, c) {
    return a + b + c;
}

console.log("Standard function call: " + rando(2, 6, 2)); // 10

// Should be rando(2)(6)(4) if wanted to curry

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            };
        };
    };
}

const curriedSum = curry(rando);
console.log("First one line currying: " + curriedSum(6)(4)(10)); // 20
// Here the curry is filled line by line
const add2 = curriedSum(13);
const add3 = add2(9);
const add4 = add3(8);
console.log("First multiple line currying: " + add4 + "\n"); // 30

// Instead of a function that takes every parameter at once...
function formName(a, b, c, d) {
    return a + b + c + d;
}
/* Is converted to a series of nested functions, which will 
   return another function that will wait for the next argument 
   and at the end of the nesting it will return the result 
   when all the arguments are recieved 
   (works like a step-by-step sum) */
function curriedName(fn) {
    return function (firstName) {
        return function (lastName) {
            return function (firstSurname) {
                return function (secondSurname) {
                    return firstName + lastName + firstSurname + secondSurname;
                };
            };
        };
    };
}
// First you declare the function that will be split -how it will play- (then the FIRST function is stored in wholeName)
const wholeName = curriedName(formName);
// Fill wholeName(1st function) with the first value (then the SECOND function is stored in firstName)
const firstName = wholeName("Andrea ");
// Fill firstName(2nd function) with the second value (then the THIRD function is stored in secondName)
const lastName = firstName("Lisette ");
// Fill secondName(3rd function) with the third value (then the FOURTH function is stored in lastName)
const firstSurname = lastName("Gonzalez ");
// Fill lastName(4th function) with the fourth value (then the FINAL result is stored in lastLastName)
const lastSurname = firstSurname("Farias");
// Log the result (stored at last in lastLastName)
console.log("First multiple line name currying: " + lastSurname); // Andrea Lisette Gonzalez Farias

// In spanish
const nombreCompleto = curriedName(formName);
const primerNombre = nombreCompleto("Cesar ");
const segundoNombre = primerNombre("Aaron ");
const primerApellido = segundoNombre("Perez ");
const segundoApellido = primerApellido("Ramirez");

console.log("Second multiple line name currying: " + segundoApellido); // Cesar Aaron Perez Ramirez

// * Fulfilling the currying in one shot
// "Initializing" the sum
const oneShot = curriedName(formName);
// Log of currying with every argument required (notice the parenthesis not needed like: (first(second(third))))
console.log(
    "First one line name currying: " +
        oneShot("Cesar ")("Aaron ")("Perez ")("Ramirez")
);

// You can also complete the function sending different amount of arguments each time
const multipleShots = curriedName(formName);

const firstShot = multipleShots("Is ")("there ");
const secondShot = firstShot("someone ");
const thirdShot = secondShot("else?");
console.log(thirdShot);

/* The utility of currying is the capability of filling the parameters 
required by a function in various steps instead of doing it in one single call */
