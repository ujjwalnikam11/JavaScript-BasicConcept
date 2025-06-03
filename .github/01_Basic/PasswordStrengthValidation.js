function isStrongPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Check for at least one uppercase letter, one lowercase letter, one digit, and one special character
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}
console.log(isStrongPassword("Password123!")); // true
console.log(isStrongPassword("password123!")); // false
console.log(isStrongPassword("PASSWORD123!")); // false
console.log(isStrongPassword("Pass123!")); // false
console.log(isStrongPassword("Passw0rd!")); // true     
console.log(isStrongPassword("P@ssw0rd")); // true
console.log(isStrongPassword("12345678!")); // false
console.log(isStrongPassword("P@ssw0rd123")); // true
console.log(isStrongPassword("P@ssw0rd!")); // true
console.log(isStrongPassword("P@ssw0rd!123")); // true
console.log(isStrongPassword("P@ssw0rd!1234")); // true