'use strict'

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString();
    }
}

let p1 = new ColorPoint(12, 10, 'red');
var co = require('co');

debugger

console.log(p1.toString());