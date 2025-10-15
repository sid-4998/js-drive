// A Javascript set is a collection of unique values
// Each value can only occur once in a set
// The values can be of any type, primitive values or objects

// Creating a set
const arrayOfLetters = ['a', 'a', 'b', 'b', 'b', 'c'];
const letters = new Set(arrayOfLetters);

// We can create a set by passing an array to the new Set() method
console.log(letters);
console.log(typeof letters);

// Iterating a set
for(const x of letters) {
    console.log(x);
}

// Set Methods
// Adding elements to a set
letters.add('d');
letters.add('e');
console.log(letters);

// Size of a set
console.log(letters.size);

// has() method
// The has() method returns true if a particular value is present in the set
// Otherwise it returns false

console.log(letters.has('a'));
console.log(letters.has('f'));

// forEach() method
// This method invokes a function for each set element

let text = "";
letters.forEach((letter) => {
    text += letter;
});
console.log(text);

// The values() and keys() methods both return an iterator to the values of the set

let text1 = "";
const Iterator = letters.values();
for(const x of Iterator) {
    text1 += x;
}
console.log(text1);

let text2 = "";
const myIterator = letters.keys();
for(const y of myIterator) {
    text2 += y;
}
console.log(text2);

// The entries() method
// Since sets have no keys associated with their values
// The entries() method returns an Iterator with [value,value] pairs for the set
// Otherwise this method is supposed to return an iterator with [key,value] pairs 
// As seen in arrays

let text3 = "";
const eIterator = letters.entries();
for(const z of eIterator) {
    text3 += z + ' ';
}
console.log(text3);

// clear() method
letters.clear();
console.log(letters);

// Set Logic Methods

// The union() method takes all the unique elements existing in both the sets
// And creates and returns a new set.
const set1 = new Set(['a', 'b', 'c']);
const set2 = new Set(['b', 'c', 'd']);

const set3 = set1.union(set2);
console.log(set3);

// The intersection() method takes all the unique and common elements 
// existing in both the sets

const set4 = set1.intersection(set2);
console.log(set4);

// The difference() method returns a set with elements not present in the argument set
const set5 = set1.difference(set2);
console.log(set5);
const set6 = set2.difference(set1);
console.log(set6);

// symmetricDifference() method
// This method returns a set with elements formed by difference in elements
// of both the sets

const set7 = set1.symmetricDifference(set2);
console.log(set7);

// isSubsetOf() method
// The isSubsetOf() method returns true if all elements in this set
// is also elements in the argument set

console.log(set1.isSubsetOf(set2));

// isSupersetOf() method
// The isSupersetOf() method returns true if all elements in 
// the argument set are also in this set

console.log(set1.isSupersetOf(set2));

// isDisjointFrom() method
// The isDisjointFrom() method returns true if this set has no elements 
// in common with the argument set

console.log(set1.isDisjointFrom(set2));


