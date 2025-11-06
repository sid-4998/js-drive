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