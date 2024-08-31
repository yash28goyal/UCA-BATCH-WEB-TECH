// var promise1 = new Promise(promiseExecuter);  // we have to implement this

function customPromiseExecuter () {
    console.log("Inside custom promise executor");
    
}

function customPromise (executerFuncArg) {
    executerFuncArg();
    this.state = "pending";
    let returnValue = undefined;
}

var custompromise1 = new customPromise(customPromiseExecuter);

// ---------------------------------------------------------------------------------------------------------------------------------- //

function customPromiseExecuter (resolve, reject) {
    setTimeout(()=>{
        resolve({response : "responseValue"});
        console.log("Inside custom promise executor");
    },5000);
}

function customPromise (executerFuncArg) {
    executerFuncArg(
        (responseArg) => {
            this.state = 'fulfilled';
            console.log("Inside the resolve function which return value  : ", responseArg);
        },
        (errorArg) => {
            this.state = 'rejected';
            console.log("Inside the error function which return value : ", errorArg);
        }
    );
    this.state = "pending";
    let returnValue = undefined;
}

var custompromise1 = new customPromise(customPromiseExecuter);

// ---------------------------------------------------------------------------------------------------------------------------------- //

function customPromiseExecuter (resolve, reject) {
    setTimeout(()=>{
        resolve("any value");
        console.log("Inside custom promise executor");
    },5000);
}

function customPromise (executerFuncArg) {
    this.state = "pending";
    let successCallbackCustom; 
    let errorCallbackCustom; 

    executerFuncArg(
        (responseArg) => {
            this.state = 'fulfilled';
            console.log("Inside the resolve function which return value  : ", responseArg);
            successCallbackCustom(responseArg);
        },
        (errorArg) => {
            this.state = 'rejected';
            console.log("Inside the error function which return value : ", errorArg);
            errorCallbackCustom(errorArg);
        }
    );

    this.then = (arg1) => {
        successCallbackCustom = arg1;
    }
    this.catch = (arg1) => {
        errorCallbackCustom = arg1;
    }

}

var custompromise1 = new customPromise(customPromiseExecuter);
let responseValue;
custompromise1.then((value)=>{
    responseValue = value;
})

// ---------------------------------------------------------------------------------------------------------------------------------- //

