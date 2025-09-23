// Looping Structures in JavaScript
// 1. For Loop
let i = 12;
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration:", i);
}
console.log("Value of i after loop:", i); // i remains 12 outside the loop
for (i = 0; i < 5; i += 2) {
    console.log("For Loop with step of 2 iteration:", i);
}  
console.log("Value of i after second loop:", i); // i is now 5 after the loop

// loop scope
// The variable 'i' declared in the for loop is scoped to the loop itself.
// It does not affect the 'i' declared outside the loop.
// This is due to the use of 'let' which provides block scope.
// If 'var' was used instead, it would have affected the outer 'i'.
// Always use 'let' or 'const' to avoid such issues.

// 2. While Loop
let j = 0;
while (j < 5) {
    console.log("While Loop iteration:", j);
    j++;
}

// 3. Do...While Loop
let k = 0;
do {
    console.log("Do...While Loop iteration:", k);
    k++;
} while (k < 5);

// 4. For...In Loop (used for iterating over object properties)
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`For...In Loop key: ${key}, value: ${obj[key]}`);
}
// 5. For...Of Loop (used for iterating over iterable objects like arrays)
const arr = [10, 20, 30];
for (let value of arr) {
    console.log("For...Of Loop value:", value);
}
// 6. Nested Loops
for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
        console.log(`Nested Loop m: ${m}, n: ${n}`);
    }
}

// 7. Break and Continue
for (let p = 0; p < 10; p++) {
    if (p === 5) {
        console.log("Breaking the loop at p =", p);
        break; // Exit the loop when p is 5
    }
    if (p === 2) {
        console.log("Skipping the iteration at p =", p);
        continue; // Skip the rest of the loop when p is 2
    }
    console.log("Continuing the loop at p =", p);
}

// 8. Labeled Statements (used with break and continue)
outerLoop: for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
        if (x === 1 && y === 1) {
            console.log("Breaking out of outer loop at x =", x, "y =", y);
            break outerLoop; // Breaks out of the outer loop
        }
        console.log(`Labeled Loop x: ${x}, y: ${y}`);
    }
}   

// Note: Use loops judiciously to avoid infinite loops which can crash your program.
