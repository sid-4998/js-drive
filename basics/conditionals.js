// Conditional Statements
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
// Example
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// else if
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
// Nested if
let num = 10;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }
} else {
    console.log("Non-positive number");
}

// Switch Statement
// Used to perform different actions based on different conditions
// The expression is evaluated once and compared with each case
// Each case contains a value to match against the expression
// When a match is found, the corresponding block of code is executed
// The default case is optional
// When no case matches, the default case is executed
// break is used to exit the switch statement
// If break is omitted, execution will continue to the next case (fall-through behavior)
// If multiple cases should execute the same code, 
// they can be grouped together without break statements between them.
// If no cases match and no default case is provided, nothing happens.


let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Example with fall-through behavior and grouped cases
let fruit = 'apple';
switch (fruit) {
    case 'apple': 
    case 'banana': 
    case 'cherry':
        console.log("This is a fruit.");
    case 'carrot':
        console.log("This is a vegetable.");
        break;
    default:
        console.log("Unknown item.");
}


