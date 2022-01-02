//let marks=Array(6)
//var marks=new Array(20,35,35,40,50,69)
var marks = [20,35,37,40,50,69]
marks[3]=45
console.log(marks.length)
marks.pop() //remove element at last form the array
marks.unshift(66) // add new element at the first of the array
marks.push(65) //Add new Element to an array
console.log(marks)
console.log(marks.indexOf(66))


console.log(marks.includes(120)) //validate if a value is presentin an Array
console.log(marks.slice(2,6)) //split array based on index
var sum=0
//for(i=0;i<marks.length;i++){
//    sum=sum+marks[i]
//}
//console.log(sum)

//reduce filter map used to Iterate and Update any values[accumulator,pulls up iteration value,0]
let totalMarks= marks.reduce((sum,total)=> sum+total,0)
console.log(totalMarks)

//print only even numbers

let scores = [12,35,33,32,34,16]
/*var evenScores=[]
for(k=0;k<=scores.length;k++){
    if(scores[k]%2==0){
        evenScores.push(scores[k])
    }
}
console.log("Evens Numbers are :"+evenScores)*/
//Filter is user to filter and array based on some condition
let newFilterEvenNum=scores.filter(score=>score%2==0)
console.log(newFilterEvenNum)

//Map 
let mapArray=newFilterEvenNum.map(score=>score*3)
console.log(mapArray)
let totalSum=mapArray.reduce((sum,val)=> sum+val,0)
console.log(totalSum)

//chaining 

