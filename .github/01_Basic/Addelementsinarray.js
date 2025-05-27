//How to add element inside the array:
let arr2 = [10, 20, 30, "S", 50, 60, 70, 80, 90, 100];
let newElement = 200; // Element to add
let indexToAdd = 3; // Index at which to add the new element
arr2.splice(indexToAdd, 0, newElement); // Adds 200 at index 3
console.log(arr2); // Output: [10, 20, 30, 200, "S", 50, 60, 70, 80, 90, 100]