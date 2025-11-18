// Javascript control flow or synchronous flow
// Control flow is the order in which statements are executed in javascript
// By default they are executed from top to bottom and left to right

// They are different ways of manipulating the control flow
// 1. Using Conditional statements (Control flow based on some condition)
// 2. Using loops (Repetitive control flow)
// 3. Using jump statements (Abruptly changing the control flow)
// 4. Using function code blocks (Reusable control flow)

// Note that javascript is single threaded, meaning it can only execute
// one operation at a time. Every task has to wait for the previous one to finish.
// This can freeze an application during slow operations(like file requests)

// Asynchronous flow
// Javascript asynchronous flow refers to how javascript handles tasks which 
// take some time to complete. For example, waiting for user input and reading files
// without blocking the execution of other code
// To prevent blocking, javascript can use asynchronous programming
// Slow operations are executed in the background and their results are
// handled later when they are ready

// Aynchronous patterns
// 1. Events
// 2. Callbacks
// 3. Promises
// 4. Async/Await

// Difference between Synchronous and Asynchronous programming
// Synchronous programming executes line by line blocking the next task
// Asynchronous programming executes slow tasks in the background without 
// blocking the execution of other tasks.

// Callbacks
// Callbacks are functions passed to another function as an argument
// They are typically used with asynchronous functions where some operation 
// has to be executed after some time when the result of the asynchronous function
// is ready. Such asynchronous functions can be javascript events, setTimeout and 
// setInterval functions. Callback functions are passed to other functions without
// parenthesis. We are only passing the reference of our callback function which is
// being called inside the asynchronous functions only after some task in the 
// background is completed

// Asynchronous programmes are difficult to write and debug. So most modern 
// javascript asynchronous methods do not use callbacks.Promises are used to handle
// asynchronous programming nowdays.

// Javascript Promises
// A promise as per its name, promises a result.
// It is a modern way of handling asynchronous operations
// It makes the syntax easy to understand and debug while implementing 
// asynchronous tasks.
// A promise object has two parts
// 1. Producing code
// 2. Consuming code
// Producing code is a code that takes some time to produce a result(Asynchronous code)
// Consuming code is a code that waits for the result produced by the producing code
// A promise object links the producing code with the consuming code
// A promise object has two properties
// 1. state
// 2. result
// There are 3 states for a promise object
// 1. pending
// 2. fulfiled
// 3. rejected
// And hence the object can have 3 result values
// 1. undefined when a promise is unfulfiled or the producing code has not 
// produced a result yet.
// 2. A result value when the promise is fulfiled and the producing code sends 
// a result to the consuming code to process the result
// 3. An error object when the promise is rejected because of some error in the 
// producing code and that error is handled with the help of consuming code

// Syntax for defining a promise object
let x = 0;
let myPromise = new Promise((resolve, reject) => {
    // producing code
    // When the producing code gives an error free result
    // Call the resolve callback
    if(x == 0) resolve("Ok");
    // Otherwise in case of an error in the producing code 
    // Call the reject callback
    else reject("Error");
});

myPromise.then(
    // .then() method has 2 callbacks(success and failure)
    // consuming code
    // Process the result(A fulfiled promise)
    (value) => { // success callback
        display(value);
    },
    // Process the error(A rejected promise)
    (error) => { // failure callback
        display(error);
    }
);

function display(result) {
    console.log(result);
}

// Using setTimeout() with a callback

setTimeout(function() {
    myFunction("I love you !!!");
}, 3000);
function myFunction(value) {
  console.log(value);
}

// Note that inside setTimeout() method which is an asynchronous method 
// we can only pass a callback function, otherwise a reference error occurs
// and the normal function gets called ignoring the timeout.

// setTimeout(myfunction("I love you !!!"), 3000); causes an error
// since a callback is a function passed as an argument to some other function
// and is called after the asynchronous method is completed. Since we can only pass
// a reference to our callback function(without parenthesis), so to use
// the myFunction() method as a callback, we can call this method inside 
// another method which is only being declared inside the setTimeout() method
// and is being called only after the timeout.

// using setTimeout() with a promise

let ready = false;
let promise1 = new Promise((resolve, reject) => {
    if(ready) {
        setTimeout(() => {
            resolve("I am ready!");
        }, 2000);
    } else {
        reject("I am not ready!");
    }
});

promise1.then(
    (value) => {
        display(value);
    },
    (error) => {
        display(error);
    }
);
// The Above promise can also be written as the code below

new Promise((resolve, reject) => {
    if(ready) {
        setTimeout(() => {
            resolve("I am great!");
        }, 4000)
    } else {
        reject("I am not great!");
    }
}).then(
    (value) => {
        display(value);
    },
    (error) => {
        display(error);
    }
)

// Use catch() block to handle the error when a promise is rejected

new Promise((resolve, reject) => {
    if(ready) {
        setTimeout(() => {
            resolve("I am great!");
        }, 4000)
    } else {
        reject("I am not great!");
    }
}).then(
    (value) => {
        display(value);
    }
).catch((error) => {
    display(error);
})

// async and await
// async and await makes promises easier to write
// async makes a function return a promise
// await makes a function wait for a promise
// async is similar to producing code
// await is similar to consuming code

async function displayResult() {
    return "Hello, everyone!";
};

displayResult().then (
    (value) => {
        display(value);
    }
);
// The above code is similar to the code below

function displaySameResult() {
    return Promise.resolve("Hi, everyone");
}
displaySameResult().then (
    (value) => {
        display(value);
    }
)

// The await keyword can only be used inside an async function
// It makes the function pause its execution and wait for the result
// of the resolved promise.

async function One() {
    const myPromise1 = new Promise((resolve) => {
        let seconds = 0;
        setTimeout(() => {
            seconds++;
            resolve(seconds);
        }, 1000);
    });
    let timeInSeconds = await myPromise1;
    console.log(timeInSeconds);
}

One();
