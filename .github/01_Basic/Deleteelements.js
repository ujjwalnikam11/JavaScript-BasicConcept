//How to delete the element from the array:
let arr4 = [10, 20, 30, "S", 50, 60, 70, 80, 90, 100];
let indexToDelete = 3; // Index of the element to delete
arr4.splice(indexToDelete, 1); // Removes 1 element at index 3
console.log(arr4); // Output: [10, 20, 30, 50, 60, 70, 80, 90, 100]