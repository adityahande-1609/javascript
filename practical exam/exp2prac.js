let a=[1,2,4,344,1,3,43,2,34];
function disp(){
    for(let i of a){
        console.log(i);
    }
}
for(let i of a){
    console.log(i);
}
console.log("the length of the string is " +a.length);
let sum;
for(let i of a){
   sum +=i;
}
let avg
avg=sum/a.length;
console.log("the average of the array is : ",avg);
a.sort(function(a,b){
    return a-b;
});
console.log(" the sorted array is :");
for(let i of a){
    console.log(i);
}
console.log("using the push function");
a.push(12345)
disp();
console.log("removing the last element by using the pop() function");
a.pop();
disp();
console.log("removing the first element by using the shift function");
a.shift()
disp();
console.log("adding a element to the start by using the unshift() function");
a.unshift(11111111);
disp();
console.log("reversing the array using the reverse function :");
a.reverse();
disp();
console.log("showing the inder of '1'using the indexOf function");
let b= a.indexOf(1);
console.log(b);