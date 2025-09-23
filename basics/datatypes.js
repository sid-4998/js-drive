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
