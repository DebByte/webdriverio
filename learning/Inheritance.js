const Person = require("./classOOPS");

class Pets extends Person {
    // get location() {
    //     return "Denmark"
    // }

    constructor(firstName, lastName) {
        //call parent class constructor
        super(firstName, lastName)
    }
}

let pet = new Pets("Meow","Pussy")
console.log(pet.fullName())
console.log(pet.location)