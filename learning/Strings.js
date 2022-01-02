let day = "Monday"

console.log(day.length)
console.log(day.slice(0,3))
//Mon day
let splitday =day.split("n")
console.log(splitday[1])

 let newQuote = day +" is Dryday and Funday"
// let value = newQuote.indexOf("day",4)
// console.log(value)

let count=0
let val = newQuote.indexOf("day")
while(val!==-1){
    count++
    val = newQuote.indexOf("day",val+1) 
}
console.log(count)

