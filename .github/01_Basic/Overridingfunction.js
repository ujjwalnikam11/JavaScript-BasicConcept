class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const myCar = new Car("Ford", 2014);
console.log(myCar.name); // Output: Ford
console.log(myCar.year); // Output: 2014
console.log(myCar.age()); // Output: 9 (or current year - 2014)

class ElectricCar extends Car {
    constructor(name, year, batteryLife) {
        super(name, year); // Call the parent class constructor
        this.batteryLife = batteryLife;
    }
}
const myElectricCar = new ElectricCar("Tesla", 2020, "100kWh");
console.log(myElectricCar.name); // Output: Tesla
console.log(myElectricCar.year); // Output: 2020
console.log(myElectricCar.batteryLife); // Output: 100kWh
console.log(myElectricCar.age()); // Output: 3 (or current year - 2020)
// Overriding the age method in ElectricCar
myElectricCar.age = function() {
    const date = new Date();
    return `This electric car is ${date.getFullYear() - this.year} years old and has a battery life of ${this.batteryLife}.`;
}
console.log(myElectricCar.age()); // Output: This electric car is 3 years old and has a battery life of 100kWh. 
// The original age method from Car is still accessible
console.log(myCar.age()); // Output: 9 (or current year - 2014)
// The overridden age method in ElectricCar is also accessible
console.log(myElectricCar.age()); // Output: This electric car is 3 years old and has a battery life of 100kWh.
// The original age method from Car is still accessible
console.log(myCar.age()); // Output: 9 (or current year - 2014)