// Destructuring

// Array Destructuring

var [arr1] = [1, 2, 3, 4, 5];
console.log(arr1); // 1

function functionXYZ(para1) {
  // console.log(typeof para1);
  var [firstNumber, secondNumber] = para1;
  console.log(typeof firstNumber, secondNumber); // number 2
}

functionXYZ([1, 2, 3, 4, 5]);

// Swapping

var a = 20;
var b = 30;

// console.log(a, b);

// b = a + b;
// a = b - a;
// b = b - a;

// console.log(a, b);

// Using Destructuring

console.log(a, b); // 20 30

[a, b] = [b, a];

console.log(a, b); // 30 20

var a2, a3;

var [a1, ...remainingArray] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][100];

console.log(a1);
console.log(remainingArray, typeof remainingArray);

function restExample(...para1) {
  console.log(para1);
  var [a, b] = para1;
  console.log(a, b);
}

restExample(1, true, "String", undefined, 2, 3, 4);

// let a55 = "String"
// console.log(a55);
// a55 = undefined;
// console.log(a55);



