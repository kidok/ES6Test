"use strict"
var m1 = new Map();

m1.set("info", () => {
    console.log("info")
});
m1.set("info2", () => {
    console.log("info2")
});
m1.set([3]);

for (let [k, v] of m1) {
    console.log(k, v);
}