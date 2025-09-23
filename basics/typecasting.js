// Typecasting
let myVar;
myVar = 34;
myVar = String(34);
console.log(myVar, (typeof myVar)); // "34" "string"
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar)); // "true" "string"
let date = String(new Date());
console.log(date, (typeof date)); // "Wed Jun 05 2024 ..." "string"
let arr = String([1, 2, 3, 4, 5]);
console.log(arr, (typeof arr)); // "1,2,3,4,5" "string"
let i = 8;
console.log(i.toString()); // "8"
let stri = Number("3434");
console.log(stri, (typeof stri)); // 3434 "number"
stri = Number("3434d34");
console.log(stri, (typeof stri)); // NaN "number"
stri = Number(true);
console.log(stri, (typeof stri)); // 1 "number"
stri = Number(false);
console.log(stri, (typeof stri)); // 0 "number"

let str = +"3434";
console.log(str, (typeof str)); // 3434 "number"
str = +"3434d34";
console.log(str, (typeof str)); // NaN "number"
str = +"true";
console.log(str, (typeof str)); // NaN "number"
str = +"false";
console.log(str, (typeof str)); // NaN "number"
str = +true;
console.log(str, (typeof str)); // 1 "number"
str = +false;
console.log(str, (typeof str)); // 0 "number"
let number = 3434;
console.log(typeof (String(number))); // "string"
let number1 = "3434";
console.log(typeof (Number(number1))); // "number"
let number2 = "3434";
console.log(typeof (+number2)); // "number"

// parseInt and parseFloat
let number3 = "34.3434";
console.log(parseInt(number3)); // 34  (removes decimal part)
console.log(parseFloat(number3)); // 34.3434 (keeps decimal part)

let number4 = 34.3434;
console.log(number4.toFixed(2)); // "34.34" (returns string)
console.log(typeof (number4.toFixed(2))); // "string" 
console.log(Number(number4.toFixed(2))); // 34.34 (converts to number)
console.log(typeof (Number(number4.toFixed(2)))); // "number"  
console.log(parseFloat(number4.toFixed(2))); // 34.34 (converts to number)
console.log(typeof (parseFloat(number4.toFixed(2)))); // "number"
console.log(parseInt(number4.toFixed(2))); // 34 (converts to number)
console.log(typeof (parseInt(number4.toFixed(2)))); // "number"

// toFixed rounds off the number
let number5 = 34.5678;
console.log(number5.toFixed(2)); // "34.57" 
console.log(number5.toFixed(3)); // "34.568" 
console.log(number5.toFixed(0)); // "35" 

// Type coercion
let mystr = "3434";
let mynum = 34;
console.log(mystr + mynum); // "343434" (string)
console.log(Number(mystr) + mynum); // 3478 (number)
console.log(+mystr + mynum); // 3478 (number)
console.log(mystr - mynum); // 3400 (number)
console.log(mystr * mynum); // 116756 (number)
console.log(mystr / mynum); // 101.0 (number)
console.log(mystr % mynum); // 18 (number)
console.log(true + true); // 2 (number)
console.log(true + false); // 1 (number)
console.log(false + false); // 0 (number)
console.log(true + 4); // 5 (number)
console.log(false + 4); // 4 (number)
console.log("3434" + true); // "3434true" (string)
console.log("3434" - true); // 3433 (number)
console.log("3434" - false); // 3434 (number)
console.log("3434" * true); // 3434 (number)
console.log("3434" * false); // 0 (number)
console.log("3434" / true); // 3434 (number)
console.log("3434" / false); // Infinity (number)
console.log("3434" + undefined); // "3434undefined" (string)
console.log("3434" - undefined); // NaN (number)
console.log("3434" * undefined); // NaN (number)
console.log("3434" / undefined); // NaN (number)
console.log("3434" + null); // "3434null" (string)
console.log("3434" - null); // 3434 (number)
console.log("3434" * null); // 0 (number)
console.log("3434" / null); // Infinity (number)
console.log(null + null); // 0 (number)
console.log(null + true); // 1 (number)
console.log(null + false); // 0 (number)
console.log(null + 4); // 4 (number)
console.log(undefined + undefined); // NaN (number)
console.log(undefined + true); // NaN (number)
console.log(undefined + false); // NaN (number)
console.log(undefined + 4); // NaN (number)
console.log(NaN + 4); // NaN (number)
console.log(NaN + true); // NaN (number)
console.log(NaN + false); // NaN (number)
console.log(NaN + NaN); // NaN (number)
console.log(NaN - NaN); // NaN (number)
console.log(NaN * NaN); // NaN (number)
console.log(NaN / NaN); // NaN (number)
console.log(NaN + "3434"); // "NaN3434" (string)
console.log(NaN - "3434"); // NaN (number)
console.log(NaN * "3434"); // NaN (number)
console.log(NaN / "3434"); // NaN (number)
console.log(Infinity + 4); // Infinity (number)
console.log(Infinity - 4); // Infinity (number)
console.log(Infinity * 4); // Infinity (number)
console.log(Infinity / 4); // Infinity (number)
console.log(Infinity + Infinity); // Infinity (number)
console.log(Infinity - Infinity); // NaN (number)
console.log(Infinity * Infinity); // Infinity (number)
console.log(Infinity / Infinity); // NaN (number)
console.log(Infinity + "3434"); // "Infinity3434" (string)
console.log(Infinity - "3434"); // NaN (number)
console.log(Infinity * "3434"); // NaN (number)
console.log(Infinity / "3434"); // NaN (number)
console.log(-Infinity + 4); // -Infinity (number)
console.log(-Infinity - 4); // -Infinity (number)
console.log(-Infinity * 4); // -Infinity (number)
console.log(-Infinity / 4); // -Infinity (number)
console.log(-Infinity + -Infinity); // -Infinity (number)
console.log(-Infinity - -Infinity); // NaN (number)
console.log(-Infinity * -Infinity); // Infinity (number)
console.log(-Infinity / -Infinity); // NaN (number)
console.log(-Infinity + "3434"); // "-Infinity3434" (string)
console.log(-Infinity - "3434"); // NaN (number)
console.log(-Infinity * "3434"); // NaN (number)
console.log(-Infinity / "3434"); // NaN (number)
console.log(34 + 4 + "34"); // "3834" (string)
console.log("3434" + 34 + 4); // "3434344" (string)
console.log(34 + 4 - "34"); // 4 (number)
console.log("3434" - 34 + 4); // 3404 (number)
console.log(34 + 4 * "34"); // 170 (number)
console.log("3434" * 34 + 4); // 116756 (number)
console.log(34 + 4 / "34"); // 34.11764705882353 (number)
console.log("3434" / 34 + 4); // 104.05882352941177 (number)
console.log(34 + 4 % "34"); // 38 (number)
console.log("3434" % 34 + 4); // 6 (number)
console.log(34 + 4 * "34" - 6 / "2" + true); // 169 (number)
console.log("3434" - 3 * 4 + 34 / 2 - false); // 3403 (number)
console.log("3434" + 3 * 4 + 34 / 2 + true); // "343412.0true" (string)
console.log("3434" + (3 * 4) + (34 / 2) + true); // "343412.0true" (string)
console.log(34 + (4 * "34") - (6 / "2") + true); // 169 (number)
console.log(("3434" - 3 * 4) + (34 / 2) - false); // 3403 (number)

// Operator Precedence
let x = 34 + 4 * 6 / 2 - (4 + 3);
// 34 + 24 / 2 - 7
// 34 + 12 - 7
// 46 - 7
// 39
console.log(x); // 39
// Precedence: () -> *, /, % -> +, -, -
// Associativity: Left to Right for all except = which is Right to Left
let y = (34 + 4) * (6 / (2 - (4 + 3)));
// (38) * (6 / (2 - 7))
// 38 * (6 / -5)
// 38 * -1.2
// -45.6
console.log(y); // -45.6




