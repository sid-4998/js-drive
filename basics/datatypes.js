// Data Types in JavaScript
// 1. Number
let age = 25;
let price = 19.99;
console.log(typeof age); // "number"
console.log(typeof price); // "number"
// 2. String
let title = "John Doe";
let greeting = 'Hello, World!';
console.log(typeof title); // "string"
console.log(typeof greeting); // "string"
// 3. Boolean
let isActive = true;
let isAdmin = false;
console.log(typeof isActive); // "boolean"
console.log(typeof isAdmin); // "boolean"
// 4. Undefined
let address;
console.log(typeof address); // "undefined" // address is declared but not assigned
// 5. Null
let phoneNumber = null; // explicitly assigned to null
console.log(typeof phoneNumber); // "object" (this is a known quirk in JavaScript)
// 6. Object
let person = { name: "Alice", age: 30 };
console.log(typeof person); // "object"
// 7. Array (which is a type of object)
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object"
console.log(Array.isArray(numbers)); // true
// 8. Function (which is also a type of object)
function sayHello() {
    console.log("Hello!");
}   
console.log(typeof sayHello); // "function"
// 9. bigint
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"
// 10. Symbol
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"

// All data types in JavaScript are dynamic, 
// meaning a variable can hold any type of data and can change types over time.

// Arrays, objects and functions are non-primitive data types, 
// while numbers, strings, booleans, null, undefined, bigint, 
// and symbols are primitive data types.

// Primitive data types are immutable, meaning their values cannot be changed. 
// Non-primitive data types are mutable, meaning their values can be changed.

// Stack and Heap Memory
// Primitive data types are stored in stack memory, 
// which is faster and has a smaller size limit. 
// Non-primitive data types are stored in heap memory, 
// which is slower but can hold larger amounts of data.
// When you assign a primitive value to a variable, 
// the actual value is stored in the variable. 
// When you assign a non-primitive value to a variable, 
// a reference (or pointer) to the location in heap memory is stored in the variable.
let x = 10; // x holds the actual value 10
let y = x; // y is assigned the value of x (10)
y = 20; // changing y does not affect x
console.log(x); // 10
console.log(y); // 20
let obj1 = { name: "Bob" }; // obj1 holds a reference to the object in heap memory
let obj2 = obj1; // obj2 is assigned the reference of obj1
obj2.name = "Charlie"; // changing obj2 affects obj1 since both reference the same object
console.log(obj1.name); // "Charlie"
console.log(obj2.name); // "Charlie"

