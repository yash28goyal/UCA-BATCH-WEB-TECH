/*
 * Entries in js is an array/collection of [key, value] pairs
 * [
 *   [key1, value1]
 *   [key2, value2]
 * ]
*/

// Set in JS 
// Set is like an array that store unique elements
// Set is an array of unique entries
// Set Store element of different data type in JS

var mySet = new Set(); // Initializing an empty Set
console.log(mySet);

/*
var mySet1 = new Set([1,2,3,4,5]); // Initializing a set with some value that are unique
console.log(mySet1);
*/

// Adding values in a set (mySet)
mySet.add("Hello");
mySet.add("World!");
mySet.add("Hello"); //only one hello should be in the set because of unique element
mySet.add("From");
mySet.add("Yash");
mySet.add(35);
mySet.add(true);
mySet.add(false);
console.log(mySet);

// Use Constructor to Initialize the set
// let newSet = new Set([1, 23, "what", false, {a : 1, b : 2}, "what"])
// console.log(newSet);

// Some Methods of set
console.log(mySet.size); //print the size of the set
console.log(mySet.has(35)); // check that entry is present in set or not

// For Deleting Element From Set
mySet.delete(false);
console.log(mySet);

// Iteration of Array
for(let items of mySet) {
    console.log('Item is : ', items);
}

// Using forEach
mySet.forEach((items)=>{
    console.log('Item is : ', items);
})


// We can create an array from the set also
console.log(Array.from(mySet));

// Removing Duplicate from the Array
let arr = new Array([1,1,1,2,3,4,5,6,5]);
let set = new Set(...arr);
console.log(arr);
console.log(set);
console.log(Array.from(set));