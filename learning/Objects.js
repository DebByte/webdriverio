// Object is collection of Properties

let person = {
    firstname:"Tim",
    lastname:"Jones",
    age:24,
    fullname: function()
    {
        console.log(this.firstname+this.lastname)
    }
}

console.log(person.fullname)
// console.log(person)
// console.log(person.firstname)
// console.log(person["lastname"])
// //person.firstname = 'David'
// //console.log(person.firstname)
// person.gender="male"
// console.log(person)
// delete person.gender
// console.log(person)

//validate a property exist
console.log("gender" in person)

for(let key in person){
    console.log(person[key])
}