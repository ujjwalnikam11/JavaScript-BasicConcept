function isLengthValid(value,min,max){
    return typeof value === 'string' && value.length >= min && value.length <= max;
}
console.log(isLengthValid("Hello", 3, 10)); // true
console.log(isLengthValid("Hi", 3, 10)); // false
console.log(isLengthValid("Hello, World!", 3, 10)); // false
console.log(isLengthValid("", 0, 10)); // true
console.log(isLengthValid("Hello", 5, 5)); // true
console.log(isLengthValid("Hello", 6, 10)); // false
console.log(isLengthValid("Hello", 0, 4)); // false
console.log(isLengthValid("Hello", 0, 5)); // true
console.log(isLengthValid("Hello", 1, 5)); // true
console.log(isLengthValid("Hello", 1, 4)); // false