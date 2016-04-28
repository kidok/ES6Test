"use strict"

var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);
var co = require('co');

// readFile('classtest.js', 'utf-8')(function(err, data){
//     console.log(data);
// });

var gen = function* () {
    let r1 = yield readFile('classtest.js', 'utf-8');
    console.log("file1:\n", r1);
    let r2 = yield readFile('data.json', 'utf-8');
    console.log("file2:\n", r2);
};

co(gen);

// var g = gen();
// var r1 = g.next();
// r1.value(function (err, data) {
//     if (err) throw err;
//     var r2 = g.next(data);
//     r2.value(function (err, data) {
//         if (err) throw err;
//         g.next(data);
//     });
// });

// function run(fn) {    
//     var gen = fn();
//     //console.log(fn.constructor.name)
//     if(fn.constructor.name != 'GeneratorFunction') return;
//     function next(err,data){
//         var result = gen.next(data);
//         if(result.done) return;
//         result.value(next);
//     };
    
//     next();
// }

// run(gen);

//promise test
// var readFile = function (fileName) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(fileName, function (error, data) {
//             if (error) reject(error);
//             resolve(data);
//         });
//     });
// };

// var gen = function* () {
//     var f1 = yield readFile('classtest.js');
//     var f2 = yield readFile('data.json');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };

// var g = gen();

// g.next().value.then(function (data) {
//     g.next(data).value.then(function (data) {
//         g.next(data);
//     });
// })

// function run(gen) {
//     var g = gen();

//     function next(data) {
//         var result = g.next(data);
//         if (result.done) return;
//         result.value.then(function (data) {
//             next(data);
//         });
//     };
    
//     next();
// };

// run(gen);

//co test
