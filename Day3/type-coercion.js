// Type Coercion

console.log(false + 1); // 1
console.log(true + true); // 2

console.log("20" + 10); // "20" + "10"
console.log(10 - "20"); // "10" + "20"
console.log("ABC" + true); // ABC + "true"
console.log("ABC" + true + 1); // ABC + "true" + "1"

console.log("ABC" + true * 1); // ABC + "1"
console.log("ABC" - true * 1); // ABC - "1"
console.log(true + "ABC" + 1); // ABC + "true" + "1"

console.log(true && true);
console.log(true || false);

console.log("XYZ" - "ABC");


console.log('ABC');
console.log("DEF");
console.log(`DEF`);


// + Operator

// var x = 10 + '20';
// var y = '20' + 10;
// var z = true + true + "20";

// console.log(x);
// console.log(y);
// console.log(z);


// Other than + Operator

// var w = 10 - '5B';
// var x = 10 * '5';
// var y = 10 / '5';
// var z = 10 % '5';

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);


// Equality Operator

var x = (10 == '10'); // "10" -> 10
var y = (true == true); // true -> 1
var z = ('true' == true);

console.log(x);
console.log(y);
console.log(z);