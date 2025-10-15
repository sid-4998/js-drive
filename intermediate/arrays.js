/* Arrays in Javascript */

// Key Characteristics
// 1. Elements: List of values seperated with commas in the array.
// 2. Ordered: Elements are ordered using an index.
// 3. Zero Indexed: First element has index 0 and so on.
// 4. Dynamic size: Array can grow or shrink if elements are added or removed.
// 5. Heterogenous: Array can have elements of different datatypes and even arrays.

// Array declaration
// Always use const keyword to declare the array
const fruits = ['Mango', 'Guava', 'Orange']; // Use square brackets

// Accessing array elements
console.log(fruits[0]);
console.log(fruits[1]);

let type = typeof(fruits); // object
// Since the typeof oprator returns object as the type of an array
// We use Array.isArray() method to check if an object is an array or not.

console.log(Array.isArray(fruits));

// An array is a special type of javascript object that 
// can contain objects, functions as well as other arrays.
// Javascript does not support arrays with named indexes

const person = [];
person['firstname'] = 'John';
person['lastname'] = 'Miller';
person['age'] = 23;
console.log(person);

// Javascript redifines this person array as an object with named indexes.
// And after this some array methods may misbehave.
// Array only uses numbered indexes.
// Hence arrays are special javascript objects because they use numbered indexes.

const points = [40]; // Declaring an array with a single element 40.
const points1 = new Array(40); // Declaring an array with 40 undefined elements.

// An object can have arrays and an array can have objects.
const myObj = { // object
  name: "John",
  age: 30,
  cars: [ // Object Array
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]}, // Array object
    {name:"BMW", models:["320", "X3", "X5"]}, // Array object
    {name:"Fiat", models:["500", "Panda"]} // Array object
  ]
}

// Basic Array Methods

console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.at(2));
console.log(fruits.join('*')); 
// The join() method is similar to toString() method but
// here we can also specify a seperator.

// The push() method adds an element at the end of the array
fruits.push("Apple");
console.log(fruits);

// The push() method returns new length of the array.
let newLength = fruits.push("Kiwi");
console.log(fruits);
console.log(newLength);

// The pop() method removes and returns the element from the last in an array
let element = fruits.pop();
console.log(element);
console.log(fruits);

// The shift() method removes the first element and shifts all other 
// elements to a lower index
// Shift() method returns the element that was shifted out.

let shiftedElement = fruits.shift();
console.log(shiftedElement);
console.log(fruits);

// The unshift() method adds an element at the beginning
// and unshifts all other elements.
// The unshift() method return the length of the unshifted array

let unshiftedLength = fruits.unshift("Lemon");
console.log(unshiftedLength);
console.log(fruits);

// delete() method
// delete fruits[0];
// The delete() method creates undefined holes in the array.
// Use pop() or shift() for this operation instead.

// Merging 2 or more arrays using concat() method.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren1 = myGirls.concat(myBoys);
console.log(myChildren1);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2);

// The copyWithin() method overwrites the existing array
// The copyWithin() method does not change the length of the array
// The copyWithin() method does adds elements to the array

console.log(myChildren1.copyWithin(2,0,2)); 
// copy to index 2 all elements from index 0(including) to 2(excluding)

console.log(myChildren2.copyWithin(2,0,3));
// copy to index 2 all elements from index 0(including) to 3(excluding)

console.log(fruits.copyWithin(2,0));
// copy to index 2 all elements from index 0(including)

// The flat() method
// flat() method is used to reduce the dimention of the array
// This method is useful when we need a one dimensional array from a multi dimentional array
// This method creates a new array with sub-array elements concatenated to a specified depth

const twoDimeArr = [[1,2], [3,4], [5,6]];
console.log(twoDimeArr.flat()); // By default the depth is 1

const threeDimeArr = [[[1,2,3],[4,5,6]], [[7,8,9], [10,11,12]]];
console.log(threeDimeArr.flat().flat());
console.log(threeDimeArr.flat(2)); // 2 is the depth of concatenation

// The slice() method
// This method creates and returns a new array
// This method does not alter the source array

const slicedArray = myBoys.slice(1); // slice the myBoys array starting from index 1
console.log(slicedArray);
// slice the myBoys array from index 0(including) to 2(excluding)
console.log(myBoys.slice(0,2)); 

// The splice() method
// This method is used to add elements in the array
// Also used to remove elements from the array without leaving undefined holes
// This method alters the source array
// This method returns the elements removed on removal operation

console.log(fruits);

// Add operation
fruits.splice(2,2,"Mango", "Orange");
// The first parameter states on which index the elements should be added
// The second parameter states how many elements to remove
// Followed by the elements to be added
console.log(fruits);

// Removal operation
const removed = fruits.splice(1,1);
// The first parameter is used to state at which index the removal operation is performed
// The second parameter is used to state how many elements should be removed
console.log(fruits);
console.log(removed);

// The toSpliced() method
// Similar to the splice() method
// But it does not alter the source array

const spliced = fruits.toSpliced(1,0,"Guava")
const splicedAgain = fruits.toSpliced(1,1);
console.log(spliced);
console.log(splicedAgain);
console.log(fruits);

// The flatMap() method


// Search Methods

// 1. indexOf() method (return type number)
// 2. lastIndexOf() method (return type number)
// 3. includes() method (return type boolean)
// 4. find() method

// The find() method returns the value of first array element that
// satifies a test function

const arr = [12,13,14,15,16,17,18,19,20];
let item = arr.find(test);

function test(value) {
    return value > 16;
}
console.log(item);

// findLast() method
// The findLast() method returns the last array element that
// satisfies a test function;
let lastItem = arr.findLast(test);
console.log(lastItem);

// findIndex() method
// The findIndex() method returns the index of the first element 
// of the array that satifies a test function

let index = arr.findIndex(test);
console.log(index);

// findLastIndex() method
// The findLastIndex() method returns the last index of 
// an array element that satisfies a test function

let lastIndex = arr.findLastIndex(test);
console.log(lastIndex);