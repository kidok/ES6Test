///

var fs = require('fs');

__dir

define(function (require, exports, module) {
    console.log('main.js执行');

    var a = require('a');
    a.hello();

    $('#b').click(function () {
        var b = require('b');
        b.hello();
    });

});