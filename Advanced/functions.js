// Javascript functions are defined using the function keyword
// We can use a function declaration or a function expression

// Declaration

function product(a, b) {
    return a*b;
}

// Expression

const x = function(c,d) { return c*d };
let z = x(4,3);

// The function expressions are also called anonymous functions
// because they do not have any name and they are invoked using
// the variable in which they are stored.
// Since the above function is an expression(An executable statement),
// they should always end with a semicolon
console.log(z);

// Hoisting
// When a function is declared, it is hosted to the top of its current scope
// Because of this a declared function can be called even before it is 
// declared. A function expression is not hoisted

console.log(myFunction(2, 3));

function myFunction(a,b) {
    return a + b;
}

// Javascript functions have both properties and methods
// The arguments.length property returns the number of arguments 
// recieved when the function was invoked.

function numberOfArguments(x,y,z) {
    console.log(arguments.length);
}
numberOfArguments();
numberOfArguments(2);
numberOfArguments(2,3);
numberOfArguments(2,3,4);

// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.

// Arrow functions
// Arrow functions allow a shorter syntax for function expression
// They do not require the function keyword
// Curly braces and the return keyword can also be omitted
// if the function has only a single statement that returns a value

// Without Arrow 
let hello = function() {
    return 'Hello world!';
};
console.log(hello());
// With Arrow
let hi = () => 'Hi, fellas!';
console.log(hi());

// Arrow functions with parameters
// If there is only 1 parameter we can skip the round braces as well

let age = val => `I am ${val} years old`;
console.log(age(23));

let sum = (a, b) => a + b;
console.log(sum(2,8));

let profile = (role, company, experience) => {
    console.log(`I have ${experience} months of relevant work experience`);
    console.log(`I am a ${role} at ${company}`);
}
profile('Project Engineer', 'Wipro', 2);

// Difference in function parameters and arguments
// Parameters are names given to the arguments(real values) during
// function declaration
// Javascript function definitions do not specify the datatype of parameters
// JavaScript functions do not perform type checking on the passed arguments
// JavaScript functions do not check the number of arguments received.
// If a function is called with missing arguments(less than declared)
// then the missing values are set to be undefined

function values(x, y) {
    if(y == undefined) {
        y = 2; // setting a default value
    }
    console.log(x, y);
}

values();
values(2);
values(2,3);

function source(m, n = 12) {
    console.log(m,n); // If value of n is not present let its default value be 12
}
source();
source(3);
source(4,5);

// The rest(...) parameter
// The rest(...) parameter allows the function to treat 
// an indefinite number of arguments as an array

const net = (...args) => {
    let total = 0;
    for(const arg of args) {
        total += arg;
    }
    return total;
};

console.log(net(12,13,14,15,16,17,18,19,20));

// The Arguments object
// Javascript functions have a built in object called arguments
// The arguments object contains an array of arguments at the time
// of function call 

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(1,23,144,56,789));
// If a function is called with too many arguments (more than declared), 
// these arguments can be reached using the arguments object
// In Javascript Arguments are passed by value
// The function only knows the values and not the argumrnt's location
// Changes made to arguments are not visible outside the function
