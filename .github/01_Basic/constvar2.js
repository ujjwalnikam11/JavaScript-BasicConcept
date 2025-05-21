const myobject = {
    name: "John",
    myMethod: function() {
        console.log("Hello from " +this.name);
    }
};
myobject.myMethod(); // Output: Hello from John
