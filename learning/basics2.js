//common multiple of 2 and 5
let n=0
for(let k=0;k<=10;k++){
    if(k%2==0 || k%5==0){
        n++
        console.log(k)
        if(n==3)
        break
    }
}