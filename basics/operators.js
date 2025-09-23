// Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation
a++; // Increment
console.log(a);
b--; // Decrement
console.log(b);

// Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log(c);
c -= 5; // c = c - 5
console.log(c);
c *= 2; // c = c * 2
console.log(c);
c /= 2; // c = c / 2
console.log(c);
c %= 3; // c = c % 3
console.log(c);
c **= 2; // c = c ** 2
console.log(c);

// Comparison Operators
console.log(a == b); // Equal value
console.log(a === b); // Equal value and type
console.log(a != b); // Not equal value
console.log(a !== b); // Not equal value or type
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to  

// Logical Operators
let x = true;
let y = false;

console.log(x && y); // Logical AND
console.log(x || y); // Logical OR
console.log(!x); // Logical NOT
console.log(!y); // Logical NOT

// String Operators

let str1 = "Hello, ";
let str2 = "World!";
console.log(str1 + str2); // Concatenation
console.log(str1 += str2); // Concatenation assignment
let str3 = "Hello" + 2 + 3; // "Hello23"
console.log(str3);
let str4 = 2 + 3 + "Hello"; // "5Hello"
console.log(str4);
let str5 = "5" + 3; // "53"
console.log(str5);
let str6 = "5" - 3; // 2 (string is converted to number)
console.log(str6);
let str7 = "5" * 2; // 10 (string is converted to number)
console.log(str7);
let str8 = "5" / 2; // 2.5 (string is converted to number)
console.log(str8);
let str9 = "Hello" * 2; // NaN (Not a Number)
console.log(str9);
let str10 = "Hello" - 2; // NaN (Not a Number)
console.log(str10);
let str11 = "Hello" / 2; // NaN (Not a Number)
console.log(str11);

// Type Operators
console.log(typeof a); // "number"
console.log(typeof str1); // "string"
console.log(typeof x); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(Array.isArray([])); // true
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof undefined);  // "undefined"
console.log(typeof function(){}); // "function"
console.log(typeof 123n); // "bigint"
console.log(typeof Symbol("id")); // "symbol"   

// spread operator
// The spread operator (...) allows an iterable such as an array
// or string to be expanded in places where zero or more arguments
// (for function calls) or elements (for array literals) are expected,
// or an object expression to be expanded in places where zero or
// more key-value pairs (for object literals) are expected.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }
let str = "Hello";
let chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o'] 


// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes" 

// Nullish Coalescing Operator
// The nullish coalescing operator (??) is a logical operator that
// returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.
let user = null;
let defaultUser = "Guest";
let currentUser = user ?? defaultUser;
console.log(currentUser); // "Guest"    
