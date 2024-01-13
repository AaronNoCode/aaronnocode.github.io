// * Loops

// * FOR
// Syntax: for(initializer; condition; final-expression){}
for (let num = 0; num <= 5; num++) {
    console.log("Learn how to count: " + num); // Prints 0-5
}

// * WHILE
let active = true;
while (active) {
    console.log("hiiii"); 
    active = !active; // Prints only once since active is converted to false in first iteration
}

// * DO..WHILE
let count = 5;
do {
    console.log(count + " iterations to die");
    count--;
} while (count > 0);
console.log("dead");

// * FOR..OF
const arr = [5, 4, 21, 456, 2];
for (const i of arr) {
    // Assign the value inside the index to i in each iteration
    console.log("Current number: " + i); // 5,4,21,456,2
}
