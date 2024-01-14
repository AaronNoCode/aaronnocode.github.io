// * Prototype

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    /*  
    + ALTER
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName
    } */
}

const person1 = new Person("Clark", "Kent"); // This is called constructor function
const person2 = new Person("Bruce", "Wayne");

// getFullName is specific for person1
person1.getFullName = function () {
    return this.firstName + " " + this.lastName;
};
console.log(person1.getFullName()); // Clark Kent
console.log(person2.getFullName()); //Error: getFullName is not a function

/* Every function has a property called 'prototype' that points to an object,
   by using that we can add methods to Person */

// By doing this now getFullName is available to all Person objects
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

// One use of prototype is to share properties and methods across instances
// Inheritance in JS is known as the concept of prototypal inheritance

// * Inheritance
// First we create a function for a new object
function Superhero(firstName, lastName) {
    this.isSuperHero = true;
    /* This way we inherit the two attributes from Person into hero
       and can be used when constructing */
    Person.call(this, firstName, lastName);
}
// We add a new property to hero using prototype.<method>
Superhero.prototype.fight = () => {
    console.log("Fighting batman probably");
};
/*
+  ALTER We can alternatively delete this method if we have all
+  attributes and method in the initial Person's declaration and not after 
   This actually copies all methods and attributes of Person to Superhero's even
   when added after initialization */
Superhero.prototype = Object.create(Person.prototype);

// New superhero created
const Superman = new Superhero("Nomad", "Air");
console.log(Superman.getFullName()); // Nomad Air
// Attribute added
Superhero.prototype.bloodtype = "O+";
console.log(Superman.bloodtype); // O+
