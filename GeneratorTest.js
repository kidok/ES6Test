"use strict"

function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

let jane = { first: 'Jane', last: 'Doe' };

const arr = ['red', 'green', 'blue'];
let iterator  = arr[Symbol.iterator]();

for(let v of objectEntries(jane)) {
  console.log(v); // red green blue
}


