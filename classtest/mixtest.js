function mix(...mixins) {
  class Mix {}

  for (let mixin of mixins) {
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== "constructor"
      && key !== "prototype"
      && key !== "name"
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

class Foo {
    m1() {
        console.log("foo");
    }
}

class Foo2 {
    m2() {
        console.log("foo2");
    }
}

class Foo3 extends mix(Foo, Foo2){

}

let f3 = new Foo3();
f3.m1();
f3.m2();