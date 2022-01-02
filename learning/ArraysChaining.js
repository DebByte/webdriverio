let scores = [12,35,33,32,34,16]
let totalVal=scores.filter(evenNum=>evenNum%2==0).map(multiply=>multiply*3).reduce((sum,val)=>sum+val,0)
console.log(totalVal)