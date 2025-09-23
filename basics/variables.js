// Variable Declarations in JavaScript
// variables must have unique names
// variable names can contain letters, digits, underscores, and dollar signs
// variable names must begin with a letter, underscore, or dollar sign
// variable names are case sensitive (y and Y are different variables)
// reserved words (like JavaScript keywords) cannot be used as variable names
// There are three ways to declare a variable: var, let, and const
// Identifier is a name given to a variable
// Best practices for naming variables: use meaningful names, use camelCase for multi-word names, avoid single-character names except for counters or iterators
// A variable must be declared before it can be used
// A program is a sequence of instructions that performs a specific task
// A statement is a complete instruction that performs an action in a program 
// A block is a group of statements enclosed in curly braces {}
// JavaScript is case sensitive
// Semicolons are used to terminate statements, but they are optional in most cases due to automatic semicolon insertion (ASI)
// Always use const for variables that won't be reassigned, and let for variables that will be reassigned. Avoid using var to prevent scope-related issues.
// Const is used to declare variables that cannot be reassigned, but the contents of objects and arrays declared with const can still be modified.
var n = 10; // Has global scope
let m = 20; // Has block scope
// Variables declared with let cannot be redeclared in the same scope
// Variables declared with var can be redeclared in the same scope
// variables declared with let and const are not hoisted to the top of their block scope
// variables declared with var are hoisted to the top of their function or global scope
// variables declared with let and const do not bind to this keyword
// variables declared with var bind to this keyword
// variables declared with const must be initialized at the time of declaration
// Const defines a constant reference to a value and not a constant value itself
const r = 30; // Has block scope and cannot be reassigned
console.log(n, m, r);
// r = 40; will cause an error because 'r' is a constant

{
    var n = 50; // Redeclares and updates the global variable 'n'
}
{
    let m = 60; // Declares a new block-scoped variable 'm'
    console.log(m); // Outputs 60, as this 'm' is different from the outer 'm'
    //let m = 70; will cause an error because 'm' is already declared in this block
}
console.log(n); // Outputs 50, as 'n' was redeclared and updated
console.log(m); // Outputs 20, as the block-scoped 'm' is not accessible here

{
    const r = 80; // Declares a new block-scoped constant 'r'
    console.log(r); // Outputs 80, as this 'r' is different from the outer 'r'
    // const r = 90; will cause an error because 'r' is already declared in this block
}

// const arrays and objects can have their contents modified, but the reference cannot be changed
const arr = [1, 2, 3];
arr.push(4); // This is allowed
console.log(arr); // Outputs [1, 2, 3, 4]
// arr = [5, 6, 7]; will cause an error because 'arr' is a constant reference

const obj = { a: 1, b: 2 };
obj.c = 3; // This is allowed
console.log(obj); // Outputs { a: 1, b: 2, c: 3 }
// obj = { d: 4 }; will cause an error because 'obj' is a constant reference
