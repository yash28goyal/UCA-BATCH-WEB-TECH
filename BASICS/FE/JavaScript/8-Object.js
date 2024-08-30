// objects are created by two mwthod one is literals and other is constructor when object is created using literal it is not singleton

/*
//Object Literal

// Symbol
var mySym = Symbol("key1");

var obj = {
    name : "Yash",
    [mySym] : "MyValue",
    "Full Name" : "Yash Goyal",
    age : 18,
    location : "Rajpura",
    email : "yash@gmail.com"
}

// accessing the object 
console.log(obj.email);
console.log(obj[mySym]);
console.log(obj["email"]); // this is the correct way for accessing the key value of the object
// console.log(obj."Full Name"); //this create a issue so use the previous one method

// overWrite the values in object 
obj.email = "yash@yahoo.com";

// Locking the value of object
// Object.freeze(obj)
// obj.email = "yash@apple.com";
// console.log(obj);

//Creating function in onject
obj.greeting = function() {
    console.log("Hello Everyone");
}

obj.greeting1 = function() {
    console.log(`Hello Js User, ${this["Full Name"]}`);
}

// console.log(obj.greeting); // it return the reffrence of the function
// console.log(obj.greeting1);

console.log(obj.greeting());
console.log(obj.greeting1());
*/


//Object Constructor

var User = new Object();
// var User = {}

User.id = "123abc"
User.name = "Yash"
// console.log(User);

// combining objects
var obj1 = {1 : "a", 2 : "b"};
var obj2 = {3 : "c", 4 : "d"};

var obj3 = {obj1, obj2};
obj3 = {...obj1,...obj2};
console.log(obj3);

//Using Assign

var obj5 = Object.assign({}, obj1, obj2); //the {} are showing the target
console.log(obj5);

// Object Literal
var objUsingLiteral1 = { name: "name1" }; 

// new Object
var objUsingNewObject1 = new Object({ name: "name1" }); 

// Object.assign
var objUsingAssign1 = Object.assign({ college: "Chirkara" }, obj2); 

// Object.assign
var obj4 = Object.assign({ name: "newName" }, obj2); 

// Object.create - Here obj4 actis as prototype objUsingCreate1
var objUsingCreate1 = Object.create(obj4);

//ways to create a object
// using object literals and using constructor function using assign, create, new Object




// prototype belong to a function no to an Object
// we can't compare two object either they are same
// but in case they can be compare because of inheritance

// var x = {a : 1};
// var y = x;
// y === x // this will return true; 