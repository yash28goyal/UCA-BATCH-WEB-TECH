// prototype uses of this and promises
// ------------------------------------------------------------------------------------------------------------------------------------------ // 
// promise is an object created using Promise() constructor function and have two properties state and value

// State
// 1.) Pending
// 2.) Fulfilled
// 3.) Rejected

// Value - Possible value
// 1.) undefined
// 2.) return error or value after execution

// ------------------------------------------------------------------------------------------------------------------------------------------ // 

function promiseExecuter() {// most of the time rhis is an asynchronous funtion that take some time to execute for example (setTmeOut();)
    setTimeout(()=>{
      console.log("Inside promise executor function");
    },10000)
} 

var promise1 = new Promise(promiseExecuter); // this is normal way of creating simple promise
var promise2 = new Promise();

// promise1 === promise2 // Return false because they both refers to the different address

// ------------------------------------------------------------------------------------------------------------------------------------------ // 

function promiseExecuter(resolve, reject) {
  setTimeout(()=>{
    resolve({response : "responseValue"})
    console.log("Inside promise executor function");
  },10000)
} 

var promise1 = new Promise(promiseExecuter);
promise1.then((value)=>{
  responseValue = value;
})

// ------------------------------------------------------------------------------------------------------------------------------------------ // 

function promiseExecuter(resolve, reject) {
  setTimeout(()=>{
    reject({response : "responseValue"})
    console.log("Inside promise executor function");
  },10000)
} 

var promise1 = new Promise(promiseExecuter);
promise1.catch((value)=>{
  responseErrorValue = value;
})

// ------------------------------------------------------------------------------------------------------------------------------------------ // 

fetch ('url')