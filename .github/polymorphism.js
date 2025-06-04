class Animal{
    speak(){
        console.log("The animal makes a sound");

    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();  
dog.speak(); // Output: Dog barks
cat.speak(); // Output: Cat meows