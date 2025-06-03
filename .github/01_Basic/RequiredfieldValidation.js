//1. Required Field Validation
function isRequired(value){
    return value !== null && value !== undefined && value !== '';
}
console.log(isRequired("Hello")); // true
console.log(isRequired("")); // false
console.log(isRequired(null)); // false
console.log(isRequired(undefined)); // false
    