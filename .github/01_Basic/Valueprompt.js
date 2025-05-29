const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter a value: ", (input) => {
    let value = Number(input);

    if (isNaN(value)) {
        console.log("Invalid input. Please enter a number.");
    } else if (value > 0) {
        console.log("The value is positive.");
    } else if (value < 0) {
        console.log("The value is negative.");
    } else {
        console.log("The value is zero.");
    }
    rl.close();
});

