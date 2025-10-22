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
