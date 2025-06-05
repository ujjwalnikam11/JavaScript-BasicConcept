// Parent Class :
class Product {
    #price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    display() {
        return `${this.name} - $${this.getPrice()}`;
    }
}

// Child Class :
class Electronic extends Product {
    constructor(name, price, brand){
        super(name, price);
        this.brand = brand;
    }

    display() {
        return `${this.name} (${this.brand}) - $${this.getPrice()}`;
    }
}

// Child Class :
class Clothing extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    display() {
        return `${this.name} (${this.size}) - $${this.getPrice()}`;
    }
}

// Creating Objects 
const products = [
    new Electronic("Laptop", 1200, "Dell"),
    new Clothing("T-Shirt", 999, "M"),
    new Electronic("Smartphone", 2500, "Apple"),
    new Clothing("Jeans", 1499, "L")
];

// Print product info to the console (Node.js environment)
products.forEach(product => {
    console.log(product.display());
});

