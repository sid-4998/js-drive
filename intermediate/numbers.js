// In Javascript numbers are represented as 64-bit floating point values
// There are two types of numbers in Javascript
// 1. Integer
// 2. Floating point numbers

// The first 0-51 bits are used to store the significant digits of the number
// The next 11 bits are used to store the exponent
// The last bit is used to store the sign of the number

// Exponential Notation
let num1 = 123e5; // 123 * 10^5
console.log(num1); // 12300000
let num2 = 123e-5; // 123 * 10^-5
console.log(num2); // 0.00123

// Integer Precision
let num3 = 999999999999999; // 15 digits
console.log(num3); // 999999999999999
let num4 = 9999999999999999; // 16 digits
console.log(num4); // 10000000000000000
// Javascript rounds it off to 16 digits

// Floating Point Precision
let num5 = 0.1 + 0.2;
console.log(num5); // 0.30000000000000004
// This is because 0.1 and 0.2 cannot be represented exactly as binary fractions
// To solve this problem we can use the toFixed() method
let num6 = (0.1 + 0.2).toFixed(2);
console.log(num6); // 0.30
console.log(typeof num6); // string
// To convert it back to a number we can use the Number() function
let num7 = Number(num6);
console.log(num7); // 0.3
console.log(typeof num7); // number
// Or we can use the parseFloat() function
let num8 = parseFloat(num6);
console.log(num8); // 0.3
console.log(typeof num8); // number
// Or we can use the unary plus operator
let num9 = +num6;
console.log(num9); // 0.3
console.log(typeof num9); // number

// NaN - Not a Number
let num10 = 100 / "Apple";
console.log(num10); // NaN
console.log(typeof num10); // number
// NaN is a property of the global object
// In other words, it is a variable in global scope
// The initial value of NaN is Not-A-Number
// NaN is a number that is not a legal number
// Any operation with NaN will return NaN
let num11 = NaN + 5;
console.log(num11); // NaN
console.log(typeof num11); // number
// To check if a value is NaN, we can use the isNaN() function
let num12 = 100 / "Apple";
console.log(isNaN(num12)); // true
let num13 = 100 / 10;
console.log(isNaN(num13)); // false
// Infinity
let num14 = 1 / 0;
console.log(num14); // Infinity
console.log(typeof num14); // number
let num15 = -1 / 0;
console.log(num15); // -Infinity
console.log(typeof num15); // number
// Infinity is greater than any number
console.log(Infinity > 99999999999999999999999999); // true
// -Infinity is less than any number
console.log(-Infinity < -99999999999999999999999999); // true
// To check if a value is finite, we can use the isFinite() function
let num16 = 1 / 0;
console.log(isFinite(num16)); // false
let num17 = 100 / 10;
console.log(isFinite(num17)); // true
// Hexadecimal, Octal and Binary Numbers
let hexNum = 0xff; // Hexadecimal
console.log(hexNum); // 255
let octNum = 0o377; // Octal
console.log(octNum); // 255
let binNum = 0b11111111; // Binary
console.log(binNum); // 255
// Converting Numbers to Strings
let num18 = 255;
console.log(num18.toString()); // "255" // Default is base 10
console.log(num18.toString(16)); // "ff" // Base 16
console.log(num18.toString(10)); // "255" // Base 10
console.log(num18.toString(8)); // "377" // Base 8
console.log(num18.toString(2)); // "11111111" // Base 2

// Converting Strings to Numbers
let str1 = "123";
let str2 = "123.45";
let str3 = "Hello";
console.log(Number(str1)); // 123
console.log(Number(str2)); // 123.45
console.log(Number(str3)); // NaN

// Comparing two objects
let obj1 = new Number(123);
let obj2 = new Number(123);
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
// Because they are two different objects in memory
// even though they have the same value

// To compare the values of two Number objects, we can use the valueOf() method
console.log(obj1.valueOf() == obj2.valueOf()); // true
console.log(obj1.valueOf() === obj2.valueOf()); // true

// compare a Number object and a number
console.log(obj1 == 123); // true
console.log(obj1 === 123); // false
// Because obj1 is an object and 123 is a number
console.log(obj1.valueOf() === 123); // true
console.log(obj1.valueOf() == 123); // true

// toExponential()
let num19 = 123456;
console.log(num19.toExponential()); // "1.23456e+5"
console.log(num19.toExponential(2)); // "1.23e+5"
console.log(num19.toExponential(4)); // "1.2346e+5"
console.log(num19.toExponential(6)); // "1.234560e+5"

// toFixed()
let num20 = 5.56789;
console.log(num20.toFixed()); // "6"
console.log(num20.toFixed(2)); // "5.57"
console.log(num20.toFixed(4)); // "5.5679"
console.log(num20.toFixed(6)); // "5.567890"

// toPrecision()
let num21 = 5.56789;
console.log(num21.toPrecision()); // "5.56789"
console.log(num21.toPrecision(2)); // "5.6"
console.log(num21.toPrecision(4)); // "5.568"
console.log(num21.toPrecision(6)); // "5.56789"

// Value of MAX_VALUE and MIN_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 // 2^1024
console.log(Number.MIN_VALUE); // 5e-324 // 2^-1074
// MAX_VALUE is the largest positive representable number
// MIN_VALUE is the smallest positive representable number

// Value of MAX_SAFE_INTEGER and MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 // (2^53)-1
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 // -(2^53)-1
// MAX_SAFE_INTEGER is the largest integer that can be safely represented
// MIN_SAFE_INTEGER is the smallest integer that can be safely represented

// To check if a number is a safe integer, we can use the isSafeInteger() function
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isSafeInteger(-9007199254740991)); // true
console.log(Number.isSafeInteger(-9007199254740992)); // false
// To check if a value is an integer, we can use the isInteger() function
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.45)); // false
console.log(Number.isInteger("123")); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(-Infinity)); // false

// To check if a value is finite, we can use the isFinite() function
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(123.45)); // true
console.log(Number.isFinite("123")); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
// To check if a value is NaN, we can use the isNaN() function
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN("123")); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("Hello")); // false
console.log(Number.isNaN(0 / 0)); // true

// POSITIVE_INFINITY and NEGATIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
// They are the same as Infinity and -Infinity
console.log(Number.POSITIVE_INFINITY === Infinity); // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true

// These number properties can only be accessed as Number.PROPERTY.
// Not as a property of a number object.
let num22 = new Number(123);
console.log(num22.MAX_VALUE); // undefined
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

let num23 = 10000000;
console.log(num23.toLocaleString('en-IN')); // Converts the number to Indian ruppee notation.