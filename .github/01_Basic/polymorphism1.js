class Animal {
    speak(){
        console.log("makes sound");
    }
}

class Dog extends Animal {
    speak(){
        console.log("barks");
    }
}   
class Cat extends Animal {
    speak(){
        console.log("meows");
    }
}
const dog = new Dog();
const cat = new Cat();
dog.speak(); // Output: barks
cat.speak(); // Output: meows