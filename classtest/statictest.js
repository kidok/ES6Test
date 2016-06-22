class Foo{
  static staticMethod(){
    console.log("123");
  }
}

//console.log("12232");
class Bar extends Foo{ 
    static staticMethod(){
        super.staticMethod();
        console.log("234");
    }
}

//static property
Foo.prop = 1;

Foo.staticMethod();
Bar.staticMethod();
