let num = [12,003,19,16,14]
let stringss = ["abc","def","ghq","xyz","mno"]

console.log(stringss.sort())

// num.sort(function(a,b){
//     return a-b
// })

num.sort((a,b)=> b-a)
console.log(num)