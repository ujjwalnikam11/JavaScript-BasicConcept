function matchesPattern(value,min, max){
    return pattern.test(value); 
}
console.log(matchesPattern("123-456-7890", /^\d{3}-\d{3}-\d{4}$/)); // true
console.log(matchesPattern("123-4567-890", /^\d{3}-\d{3}-\d{4}$/)); // false
function matchesPattern(value, pattern) {
    return pattern.test(value);
}
const phoneNumber = "123-456-7890"; // Define a test phone number value
console.log(matchesPattern(phoneNumber, /^\d{3}-\d{3}-\d{4}$/)); // true
const invalidPhoneNumber = "123-4567-890"; // Define a test invalid phone number value
console.log(matchesPattern(invalidPhoneNumber, /^\d{3}-\d{3}-\d{4}$/)); // false
