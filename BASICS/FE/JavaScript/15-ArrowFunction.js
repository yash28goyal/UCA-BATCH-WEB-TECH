//Arrow Function
// Scope of this keyword
// Inside normal function, we have access to default argument object and not in the arrow function
// This is function declaration
function foo() {
    console.log("This is a normal function declaration");
}

// Arrow Function are declared as functional expression
var foo = ()=> {
    console.log("This is a function");
}

// Arrow Function can be a anonymous function but normal can't be anonymous
() => {
    console.log("This is anonymous function");
}