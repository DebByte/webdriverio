module.exports=class Person{
age=26

// get considered as properties
get location(){
    return "India"
}

//constructor is method which executes by default when you create object of the class
constructor(firstName, lastName){
this.firstName=firstName
this.lastName=lastName
}

//methods
fullName()
{
    console.log(this.firstName+this.lastName)
}

}
// let person =new Person("David","James")
// let person1=new Person("Chris","jhones")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())



