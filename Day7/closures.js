// Closures

/*
    A function bind together with its lexical enivornment
    OR
    Function along with its lexical scope forms a closure
    OR
    Function along with its Lexical Scope
*/

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a); // 7
//   }
//   y();
// }

// x();

var a = 7;

function x() {
  let a = 8;
  function y() {
    console.log(a);
  }
  return y;
}

const aFunction = x();
aFunction(); // 8

// a = 90;

// aFunction(); // 8

//console.log(aFunction, typeof aFunction);

// 1000 Thousand Lines

// console.log(a);
// a = 8;
// console.log(a);
// var z = x();
// console.log(z);
// z();
// a = 98;
// console.log(a);

/*

    Use of Closures


    Currying
    Functions like once
    memoize
    Async Programming - setTimeout
    setTimeouts
    Iterators

*/
