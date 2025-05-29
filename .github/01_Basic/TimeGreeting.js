let time = new Date().getHours();
let greeting;

if (time < 10) {
    throw new Error("Time is less than 10, cannot proceed.");
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Display the greeting:
console.log(greeting);


