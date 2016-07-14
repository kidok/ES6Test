"use strict"

var Reader = require("./Reader");
var r1 = new Reader();
r1.read(function(data) {
    console.log(data);
})