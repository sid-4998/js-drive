// Methods of defining javascript objects
// 1. Using the object literal
// 2. Using the new keyword and object constructor

// Object literal
const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 23
};

// The 'Object' is the constructor
// The new keyword assigns memory for this object
const newPerson = new Object({
    firstname: 'Sid',
    lastname: 'Jha',
    age: 23
})

// Both the above methods create an object.
// But the new keyword sometimes can create errors and has less execution speed
// Always prefer the object literal method to create objects 
// for readability, simplicity and execution speed

// The Object.create() method
// This method is used to create a new object from an existing object
// This method produces the same properties of an object as the 
// parent object but does not provide them the same value.

const man = Object.create(person);
man.firstname = 'Max';
man.lastname = 'Verstappen';
console.log(man);

// The Object.assign() method
// This property copies the values of properties of the source object to the target object

Object.assign(person, newPerson);
// Here person is the target object
// newPerson is the source object
console.log(person);

// The Object.fromEntries() method
// This method creates an object from iterable key-value pairs

const fruits = [['apples', 300], ['banana', 400], ['guava', 500]];
const fruitObject = Object.fromEntries(fruits);
console.log(fruitObject);

// Javacript object are mutable
// When we create a copy of an object, it has the same reference(same memory address)
// as the original object. Hence any change made to the copy
// will also affect the original object

const x = newPerson;
x.age = 24;
console.log(x);
console.log(newPerson);

// Object Constructors
// When we have to create multiple objects of the same type
// we use an object constructor function to create an object type
// We can also add methods to an object constructor function

function Person(first, last, age, eyeColor) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyeColor = eyeColor;
    this.nationality = 'Indian';
    this.fullname = function () {
        return this.firstname + " " + this.lastname;
    }
}
// In a constructor function this has no value
// Only when an object is created using the new keyword,
// The value of this becomes equal to that object

const myFather = new Person('Shailendra', 'Jha', 55, 'black');
const myMother = new Person('Seema', 'Jha', 50, 'brown');
const myBrother = new Person('Sarthak', 'Jha', 20, 'black');

// Adding a property to an object
// This property is only added to the myFather object.
myFather.hobby = 'Reading';
console.log(myFather);

// When a default value is given to the object constructor,
// it is applied to all the objects created from that constructor
// The default value of nationality property is added to all objects
console.log(myMother);
console.log(myBrother);

// We can also add a default value of a property directly to the 
// object constructor function using the prototype keyword

Person.prototype.city = 'Jamshedpur';
console.log(myBrother.city);
console.log(myMother.city);
console.log(myFather.city);
console.log(myFather.fullname());

// We can also add a method to a created object
myFather.changeEyeColor = function (color) {
    this.eyeColor = color;
}
myFather.changeEyeColor('Brownish Black');
console.log(myFather);

// We can also directly add a method to object constructor function
// using the prototype keyword

Person.prototype.ChangeCity = function(city) {
    this.city = city;
}
myBrother.ChangeCity('Pune');
console.log(myBrother.city);
console.log(myFather.city);

// Destructuring
// The destructuring assignment syntax unpacks object property values into variables
// The variable names should be identical to object properties
// The order of variables does not matter
// For missing properties we can set default values
// We can also make aliases of variables

let {age, eyeColor, hobby} = myFather;
console.log(eyeColor, age, hobby);
let {firstname: fn, lastname: ln, country = 'India'} = newPerson;
// Here fn is an alias of variable firstname and likewise ln is an alias of lastname
console.log(fn + " " + ln);
console.log(country);

// Destructuring can also be used to unpack other iterables such as 
// arrays, strings, maps etc

let actor = 'Mildred';
let [s1, s2, s3, s4, s5, s6, s7] = actor;
console.log(s1, s2, s3, s4, s5, s6, s7);

const arr = [1,2,3,4,5,6,7,8];
let [a, b,...rest] = arr;
console.log(a,b);
console.log(rest);

// We can also skip some array values using commas
let [c,,,,d] = arr;
// c is the first element
// d is element after 4 commas
console.log(c, d);
let [,,e,,f] = arr;
console.log(e, f);
// We can also destructure array elements at specific positions by using aliases
let {[3]: fourth, [4]: fifth} = arr;
console.log(fourth, fifth);

// Destructuring maps
const mapping = new Map(fruits);
for(const [key, value] of mapping) {
    console.log(key, value);
}

// Swapping variables
let num1 = 2;
let num2 = 3;
[num1, num2] = [num2, num1];
console.log(num1, num2);

// Prototype inheritance
// All javascript objects inherit their properties and methods 
// from a prototype
// Object.prototype is on top of the prototype inheritance chain

// The Object.entries() method
// This method returns an array of key-value pairs of an object's properties and methods

const newArray = Object.entries(myFather);
console.log(newArray);

// The Object.keys() method
// This method return an array of keys of an object

console.log(Object.keys(myFather));

// The Object.values() method
// This method returns an array of property values of an object

console.log(Object.values(myFather));
