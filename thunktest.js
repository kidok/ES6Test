'use strict'
var fs = require('fs');
var assert = require('assert');

function Thunk(fn){
    return function(){
        let args = Array.prototype.slice.call(arguments);
        return function(callback){
            args.push(callback);
            //console.log(this);
            return fn.apply(null, args);
        }
    }
}

debugger
function thunkify(fn){
  assert('function' == typeof fn, 'function required');

  return function(){
    var args = new Array(arguments.length);
    var ctx = this;

    for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function(done){
      var called;

      args.push(function(){
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};

var readFileThunk = Thunk(fs.readFile);
readFileThunk('data.json','utf-8')(function(err,data){
    console.log(data);
});

// fs.readFile('\data.json','utf-8', function(err,data){
//     console.log(err);
// })