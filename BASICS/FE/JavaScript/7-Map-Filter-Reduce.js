// Map in JS
// map create a new array in js by performing some operation on each array Element

// map has three argument value index and array 
// map(value, index, array)
// these method does not change our original array

var arr = [45, 23, 21, 65];
arr.map((value)=>{
    // console.log(value);
})
var a = arr.map((value, index, array)=>{
    // console.log(value, index, array);
    return value+1;
})
// console.log(a);

// Array Filter Method (it filter the element based on specific condition)
let arr1 = [4, 23, 56, 2, 3, 9, 42];
let a1 = arr1.filter((value)=>{
    return value > 10;
})
// console.log(a1);
 
// Reduce Method in Array (Reduces an array to single value)
let arr2 = [4, 23, 56, 2, "What", 9, 42, false];
let a2 = arr2.reduce((a1, a2)=>{
    return a1 + a2;
})
console.log(a2);
