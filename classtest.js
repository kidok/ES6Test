"use strict"

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calArea(){
  	return this.height * this.width;
  }

  get area(){
  	return this.calArea();
  }

}

var p = new Polygon();

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));