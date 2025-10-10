// String Manipulation in JavaScript
// We can use single and double quotes to represent strings.
let str1 = 'This is a string';
let str2 = "This is also a string";

// Template strings (using backticks)
// If a string containes both single and double quotes
// we can use backticks to represent the string.
let str3 = `This is a string with both 'single' and "double" quotes`;
console.log(str3);
// Template strings allow for multi-line strings
let str4 = `This is a string
that spans multiple
lines.`;
console.log(str4);

// Template strings allow for string interpolation
let name = "John";
let age = 30;
let str5 = `My name is ${name} and I am ${age} years old.`;
console.log(str5);
// We can also use expressions inside ${}
let str6 = `In 5 years, I will be ${age + 5} years old.`;
console.log(str6);
// We can also call functions inside ${}
function greet(name) {
    return `Hello, ${name}!`;
}
let str7 = `${greet(name)} Welcome to the world of JavaScript.`;
console.log(str7);
// We can use backslashes to escape characters
let str8 = 'This is a string with a newline character.\nSee?';
console.log(str8);
let str9 = "This is a string with a tab character.\tSee?";
console.log(str9);
let str10 = 'This is a string with a backslash character.\\ See?';
console.log(str10);
let str11 = 'He said, "It\'s a beautiful day!"';
console.log(str11);

// Common String Methods
let sampleStr = "  Hello, World!  ";
console.log(sampleStr.length); // Length of the string
console.log(sampleStr.toUpperCase()); // Convert to uppercase
console.log(sampleStr.toLowerCase()); // Convert to lowercase
console.log(sampleStr.trimStart()); // Remove whitespace from the start
console.log(sampleStr.trimEnd()); // Remove whitespace from the end
console.log(sampleStr.trim()); // Remove whitespace from both ends
console.log(sampleStr.indexOf("World")); // Find index of substring
console.log(sampleStr.slice(7, 12)); // Extract substring
console.log(sampleStr.replace("World", "JavaScript")); // Replace substring
console.log(sampleStr.split(", ")); // Split string into array
console.log(sampleStr.charAt(1)); // Get character at index
console.log(sampleStr.startsWith("  Hello")); // Check if string starts with substring
console.log(sampleStr.endsWith("!  ")); // Check if string ends with substring
console.log(sampleStr.includes("Hello")); // Check if string contains substring
console.log(sampleStr.repeat(2)); // Repeat the string
console.log(sampleStr.concat(" Let's learn JavaScript.")); // Concatenate strings
console.log(sampleStr.padStart(20, '*')); // Pad the start of the string
console.log(sampleStr.padEnd(20, '*')); // Pad the end of the string
console.log(sampleStr.substring(2, 7)); // Extract substring (similar to slice)
console.log(sampleStr.substr(2, 5)); // Extract substring (different from slice)

// To replace all occurances of a substring in a string
// use a regular expression with the global flag 'g'
// Regular expressions are written between two slashes without quotes.
let str12 = "The rain in Spain stays mainly in the plain.";
let newStr12 = str12.replace(/in/g, "on");
console.log(newStr12); // "The raon on Spaon stays maonly on the plaon."  

console.log(str12.replaceAll("in", "on")); 
// "The raon on Spaon stays maonly on the plaon."

// While using the split method if the seperator is an empty string
// the string is split between each character.
console.log(sampleStr.split("")); // Splits between each character

// And if the seperator is not found in the string or not provided,
// the entire string is returned as the only element of the array.
console.log(sampleStr.split("x")); // ["  Hello, World!  "]


// Accessing characters in a string
console.log(sampleStr[0]); // First character
console.log(sampleStr.charAt(0)); // First character using charAt method
console.log(sampleStr[sampleStr.length - 1]); // Last character
console.log(sampleStr.charAt(sampleStr.length - 1)); // Last character using charAt method

// Strings are immutable
let immutableStr = "Hello";
immutableStr[0] = "h"; // This won't change the string
console.log(immutableStr);
immutableStr = "h" + immutableStr.slice(1); // This creates a new string
console.log(immutableStr);

// All string methods return new strings and do not modify the original string
let originalStr = "JavaScript";
let modifiedStr = originalStr.toUpperCase();
console.log(originalStr);


// Both indexOf() and lastIndexOf() return -1 if the substring is not found
console.log(originalStr.indexOf("x")); // -1
console.log(originalStr.lastIndexOf("x")); // -1

// Both indexOf() and lastIndexOf() can take a second parameter
// which specifies the position to start the search from.
console.log(originalStr.indexOf("a", 2)); // 3 (search starts from index 2)
console.log(originalStr.lastIndexOf("a", 2)); // 1 (search starts backwards from index 2)   
console.log(originalStr.indexOf("a", 4)); // -1 (no 'a' found after index 4)
console.log(originalStr.lastIndexOf("a", 0)); // -1 (no 'a' found before index 0)

// The lastIndexOf() method searches the string backwards
console.log(originalStr.lastIndexOf("a")); // 3 (last 'a' is at index 3)

// Search method
console.log(originalStr.search("S")); // 4 (index of 'S')
console.log(originalStr.search(/s/i)); // 4 (case insensitive search for 's')
console.log(originalStr.search("x")); // -1 (not found)

// Difference between indexOf() and search()
// indexOf() can take a second parameter to specify the starting position
// search() cannot take a second parameter
// search() can take regular expressions
// indexOf() cannot take regular expressions

// Match method
let text = "The rain in SPAIN stays mainly in the plain";
let matches = text.match(/ain/gi); // g for global, i for case insensitive
console.log(matches); // ["ain", "AIN", "ain", "ain"]
// If no match is found, match() returns null
let noMatch = text.match(/xyz/);
console.log(noMatch); // null
// match method returns an array with additional properties
let matchDetails = text.match(/ain/);
console.log(matchDetails); // ["ain", index: 5, input: "The rain in SPAIN stays mainly in the plain", groups: undefined]
// index property indicates the position of the match in the string
// input property contains the original string

// Search method vs Match method
// search() returns the index of the first match or -1 if not found
// match() returns an array of matches or null if not found
console.log(text.search(/ain/i)); // 5 (index of first match)
console.log(text.match(/ain/i)); // ["ain", index: 5, input: "The rain in SPAIN stays mainly in the plain", groups: undefined]

// matchAll method
// Returns an iterator of all matches, including capturing groups
let regex = /ain/gi;
let allMatches = text.matchAll(regex);
for (const match of allMatches) {
    console.log(match);
}
// Each match is an array with additional properties like index and input

// Difference between match() and matchAll()
// match() returns an array of matches or null
// matchAll() returns an iterator of all matches, including capturing groups