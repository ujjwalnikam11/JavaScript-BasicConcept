//Defining objects in JavaScript
let person = {
    first_name:"Mukul",
    last_name:"Sharma",

    //method
    getFunction:function(){
        return(`The name of the person is ${this.first_name} ${this.last_name}`);
    },
    //object inside object
    phone_number:{
        mobile:'12345',
        landline:'67890',
    }
}
let V2 = {
    first_name:"Vishal",
    last_name:"Sharma",

    //method
    getFullName:function(){
        return(`The name of the person is ${this.first_name} ${this.last_name}`);
    },
    //object inside object
    phone_number:{
        mobile:'54321',
        landline:'09876'
    }
}
let V3 = {
    first_name:"Vikas",
    last_name:"Sharma",

    //method
    getFullName:function(){
        return(`The name of the person is ${this.first_name} ${this.last_name}`);
    },
    //object inside object
    phone_number:{
        mobile:'11223',
        landline:'44556'
    }
}


// Accessing properties and methods
console.log(person.first_name); // Accessing property
console.log(person.getFunction()); // Calling method
console.log(person.phone_number.mobile); // Accessing nested object property

console.log(V2.first_name); // Accessing property
console.log(V2.getFullName()); // Calling method
console.log(V2.phone_number.mobile); // Accessing nested object property

console.log(V3.first_name); // Accessing property
console.log(V3.getFullName()); // Calling method
console.log(V3.phone_number.mobile); // Accessing nested object property