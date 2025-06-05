class vehicle {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`${this.name} is starting.`);
    }
}

class Car extends vehicle {
    start() {
        console.log(`${this.name} is starting with a roar.`);
    }
}

class Motorcycle extends vehicle {
    start() {
        console.log(`${this.name} is starting with a vroom.`);
    }
}

const car = new Car("Car");
const motorcycle = new Motorcycle("Motorcycle");
car.start(); // Output: Car is starting with a roar.
motorcycle.start(); // Output: Motorcycle is starting with a vroom