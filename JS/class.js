// * Class

/* In JS classes are just syntactical sugar 
   This file is basically a copy of prototype.js but with classes */

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Can declare another properties outside constructor
    prop = 432;
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

const p1 = new Person("Aaron", "Ramirez");
console.log(p1.getFullName());

// With this we delare that Superhero is inherited from Person
// Kinda like class Superhero : public Person {} in C++
class Superhero extends Person {
    constructor(firstName, lastName) {
        // Calls the father class constructor
        super(firstName, lastName);
        this.isSuperHero = true;
        this.bloodtype = "O+";
    }
    // Adding a new method
    fight() {
        console.log("Fighting batman probably");
    }
}

const flash = new Superhero("Barry", "Allen");
// Now flash inherit the getFullName method
console.log(flash.getFullName());
