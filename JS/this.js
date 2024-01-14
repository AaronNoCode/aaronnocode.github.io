// * This

/* Refers to the object it belongs to 
   makes functions reusable by letting you decide the object value 
   the value is determined entirely by how the function is called */

//  Ways to determine THIS value:
// * Implicit binding
const person = {
    name: "Aaron",
    sayName: function () {
        // THIS is treated as the person property
        console.log(`My name is ${this.name}`);
    },
};
// When used a dot(.) notation, THIS belongs to the entity at the left of the dot
person.sayName();

// * Explicit binding
const person1 = {
    name: "Pepe",
};
const person2 = {
    name: "Andrea",
};

function sayName() {
    // THIS is referencing the object called at using this function
    console.log(`My name is ${this.name}`);
}
// First call the function and then the object that needs it
sayName.call(person1); // Pepe
sayName.call(person2); // Andrea

// * New binding
function Person(name) {
    this.name = name;
}
// When using new, THIS will always create an empty object
const p1 = new Person("FirstBorn");
const p2 = new Person("SecondBorn");

// * Default binding
// This one will be used when none of the others is specified

/* As none object is invoking the function, JS defaults THIS value
   to the global object, in the global scope JS will look for a variable
   called 'name' */

sayName(); // My name is undefined (as there's none variable called 'name')

/* const name = 'GLOBAL' will not work since its only a variable, 
   not an attribute of an object */

/* Now that we declared an attribute 'name' to the globalThis, 
   the function can get that attribute from the global scope */
globalThis.name = "GLOBAL";
sayName(); // My name is GLOBAL

// * Order of precedence
/* When multiple rules can be apllied to find THIS value the priority goes:
   NEW
   EXPLICIT
   IMPLICIT
   DEFAULT */
