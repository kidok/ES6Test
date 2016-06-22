class Foo {
    constructor() {
        console.log(new.target == Foo);
    }
}

class Bar extends Foo {
    constructor() {
        super();
    }
}

//abstract class
class Shape {
    constructor(){
        if(new.target == Shape){
            throw new Error("Shape is abstract");
        }
    }
}

class Rectangle extends Shape{

}

let f1 = new Foo();
let b1 = new Bar();
let s1 = new Rectangle();