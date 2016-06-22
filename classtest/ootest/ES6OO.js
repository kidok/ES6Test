class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }

    walk() {
        console.log("I am walking!");
    }

    sayHello() {
        console.log("Hello, I'm " + this.firstName);
    }
}

class Student extends Person {
    constructor(firstName, subject) {
        super(firstName);
        this.subject = subject;
    }

    sayHello() {
        console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
    }

    sayGoodBye() {
        console.log("Goodbye!");
    }
}

// Example usage:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Check that instanceof works correctly
console.log(student1 instanceof Person);  // true 
console.log(student1 instanceof Student); // true

console.log(Student.prototype.__proto__ === Person.prototype);