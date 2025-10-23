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

// The this keyword
// In Javascript, this keyword refers to different objects 
// depending upon how it is used

// Alone this refers to the global object
// In an HTML page the global object is the page itself
// In a browser the global object is the browser window
// Hence a global function is also called a window function 
let obj = this;
console.log(obj);
console.log(this);

// The global object
// When a function is invoked without an owner object then
// the value of this is equal to the global object

const obj1 = () => {
    return this;
}
console.log(obj1());

// Invoking a function as a method
// In an object the this keyword refers to the object
const myObj = {
    firstname: 'John',
    lastname: 'Doe',
    fullname: function () {
        return this.firstname + " " + this.lastname;
    },
    obj0: function() {
        return this.fullname();
    },
    obj01: function() {
        return this;
    }
};
console.log(myObj.fullname());
console.log(myObj.obj0());
console.log(myObj.obj01());

// In a function in strict-mode, this is undefined
// Invoking a function with a constructor
// When the function invocation is preceded with
// the new keyword, its termed as constructor invocation

function constructor(arg1, arg2) {
    this.first = arg1;
    this.last = arg2;
    console.log(this);
}

const obj2 = new constructor("Sid", "Jha");
// The this keyword in the constructor does not have a value.
// The value of this will be the new object created when the function is invoked.
console.log(obj2.first);

// The call() method
// With call() method we can reuse a pre-written method for different objects
// All javascript functions are methods
// A global function is a method of the global object

const person = {
    firstname: 'John',
    lastname: 'Doe',
    fullname: function (city, country) {
        return this.firstname + " " + this.lastname + ", " + city + ", " + country;
    }
}

const person1 = {
    firstname: "Siddhant",
    lastname: "Jha"
}

const person2 = {
    firstname: "Sarthak",
    lastname: "Jha"
}

console.log(person.fullname.call(person1, "Jamshedpur", "India"));
console.log(person.fullname.call(person2, "Pune", "India"));

// The apply() method
// The apply() method is similar to the call method but
// the only difference is that the call() method takes its 
// arguments seperately but the apply() method needs its 
// arguments as an array
// The apply() method can be used by passing an array as its argument
// in case of a large list of arguments

const arr = ["Jamshedpur", "India"];
console.log(person.fullname.apply(person1, arr));

// The bind() method
// The bind() method is used for function borrowing

let fullName = person.fullname.bind(person1, "Jamshedpur", "India");
console.log(fullName()); 

// Here the bind() method borrows the fullname method of the person object
// and uses it for person1 object and returns a function fullName,
// which on being invoked performs the same operation on person1 object.

// The bind() method is also used to preserve the value of this keyword
// in case of an object method being used as a callback
// When an object method is used as a callback the value of this is lost

const newPerson = {
    age: 23,
    role: 'Software Engineer',
    company: 'Google',
    profile: function() {
        return `I am ${this.age} years old and I work at ${this.company} as a ${this.role}`;
    },
    display: function() {
        console.log(this.age, this.role, this.company);
    }
}
console.log(newPerson.profile());
setTimeout(newPerson.display, 3000);

// This error can be solved by binding the method of the object used as 
// a callback to the same object.
let newDisplay = newPerson.display.bind(newPerson);
setTimeout(newDisplay, 5000);