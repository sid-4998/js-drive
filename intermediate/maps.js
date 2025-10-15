// A Map object holds key-value pairs where the keys can be any datatype.
// A Map also remembers the original insertion order of the keys.

// Creating a map

const fruits = new Map();

// set() method
// This method is used to add elements in the map

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits);

// The set() method can also be used to update an element
fruits.set("apples", 400);
console.log(fruits);

// The get() method is used to get a value of a key in the map
console.log(fruits.get("apples"));
console.log(fruits.size);
console.log(fruits.has("apples"));
fruits.delete("apples");
console.log(fruits.has("apples"));
console.log(fruits);
fruits.forEach((key,value) => {
    console.log(key, value);
});

for(const x of fruits.entries()) {
    console.log(x);
}

for(const y of fruits.keys()) {
    console.log(y);
}

for(const z of fruits.values()) {
    console.log(z);
}
