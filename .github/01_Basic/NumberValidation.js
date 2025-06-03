function isNumber(value){
    return !isNaN(value);
}
const number = 123; // Define a test number value
console.log(isNumber(number)); // true
const notANumber = "abc"; // Define a test non-number value
console.log(isNumber(notANumber)); // false