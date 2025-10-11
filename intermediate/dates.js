/* Dates in JavaScript */

// Creating a Date Object
let currentDate = new Date();
console.log(typeof currentDate); // object
console.log("Current Date and Time:", currentDate);

// Date get methods (Static)
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed // 0-11
console.log("Day:", currentDate.getDate()); // Day of the month
console.log("Day of the week:", currentDate.getDay()); // Day of the week
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
console.log("Milliseconds:", currentDate.getMilliseconds());
console.log("Milliseconds since January 1, 1970", currentDate.getTime());
console.log("Difference in local time and UTC time in minutes", currentDate.getTimezoneOffset());
console.log(Date.now()); // Number of milliseconds since January 1, 1970.

// Displaying dates
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());
console.log(currentDate.toUTCString());
console.log(currentDate.toISOString());
console.log(currentDate.toLocaleString());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());

// Date set methods
currentDate.setFullYear(2020);
currentDate.setMonth(11); // 0-11
currentDate.setDate(31); // 1-31
currentDate.setHours(23); // 0-23
currentDate.setMinutes(59); // 0-59
currentDate.setSeconds(59); // 0-59
currentDate.setMilliseconds(999); // 0-999

console.log(currentDate.toString());