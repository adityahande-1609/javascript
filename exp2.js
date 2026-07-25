let a=[1,2,34,4,2,3,3,23,3,23,4,33]
// display array 
console.log("array elements: \n")
for (let i of a){
    console.log(i)
}
console.log("\n\n")
// sum and average of array
let sum=0
for (let i of a){
    sum+=i
}
let avg=sum/a.length
console.log("sum:", sum)
console.log("average:", avg)
// sort 
a.sort(function(a,b){
    return a-b
})
console.log("sorted array: \n")
for (let i of a ){
    console.log(i)
}
// reservse
console.log("reversed array: \n")
for(let i = a.length-1; i>=0; i--){
    console.log(a[i])
}
// largest num
console.log("\n\n")
l =a[0]
for ( let i of a){
    if (l<i){
        l=a[i]
    }
}
console.log("largest number: ", l)
// shift,unshit , pop and push
a.unshift(100)
console.log("after unshift:", a)
a.shift()
console.log("after shift:", a)
a.push(200)
console.log("after push:", a)
a.pop()
console.log("after pop:", a)
// indexOF