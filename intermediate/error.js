try{
    // Block of code to try
}
catch(err) {
    // Block of code to handle errors
}
finally {
    // Block of code that gets executed regardless of try/catch block
}

// A Javascript error is an object
// It has two properties: name and message
// name: sets or returns an error name
// message: sets or returns an error message(string)


// The throw statement
// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).
// The exception can be a JavaScript String, a Number, a Boolean or an Object

let x = 2;
try {
    if(isNaN(x)) throw "Not a number";
    else console.log(x);
}
catch(err) {
    console.log(err);
}
finally {
    console.log("Please enter a number");
}