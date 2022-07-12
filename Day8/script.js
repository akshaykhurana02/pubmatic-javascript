// Function Expressions
var func1 = function () {
  console.log("Function 1");
};

// func1();

// Named Function Expressions

var func2 = function func2() {
  console.log(func2);
  console.log("Function 2");
};

// abc();

// func2();

function myFunction() {
  console.log(myFunction);
}

// myFunction();

// Regular Function
var func3 = function () {
  console.log("Function 3");
};

// Arrow Function
var func4 = () => {
  console.log("Function 4");
};

// func3();

// func4();

// If 1 parameter, 1 statement to be executed

// var func5 = (para1) => {
//   console.log(para1);
// }

// OR

// var func5 = para1 => {
//   console.log(para1);
// };

// OR

var func5 = (para1) => console.log(para1);

// If more than 1 parameters

// var func5 = (para1, para2) => {
//   console.log(para1);
//   console.log(para2);
// }

// func5("Hello!");

// Callback Function

function x() {
  let a = 8;
  let b = 9;
  let c = 30;
  let d = 40;
  let check1 = Math.ceil(Math.random() * 10);

  function y() {
    console.log(a, b);
  }

  function z() {
    console.log(c, d);
  }

  if (check1 % 2 == 0) {
    return y;
  } else {
    return z;
  }
}

var func6 = (para1) => {
  console.log(`${para1}`);
  para1();
};

var oddNumber = x();


console.log("Function Called!");
func6(oddNumber);

// Here this oddNumber is a Callback Function
// Here func6 is a Higher Order Function because it is accepting 1 argument which is a function

// console.log("\n ********* \n \n");

// console.log("Even Number's Function Called!");
// func6(evenNumber);

// Higher Order Funtions

/*

   A Higher-Order function is a function that receives a function as an argument or returns the function as output.

*/

// Destructuring

// Array Destructuring

var [arr1] = [1, 2, 3, 4, 5];
console.log(arr1);

function functionXYZ(para1) {
  // console.log(typeof para1);
  var [firstNumber, secondNumber] = para1;
  console.log(typeof firstNumber, secondNumber);
}

// functionXYZ([1, 2, 3, 4, 5]);

// Swapping

var a = 20;
var b = 30;

// console.log(a, b);

// b = a + b;
// a = b - a;
// b = b - a;

// console.log(a, b);





// Using Destructuring

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);
var a2, a3;

var [a1, ...remainingArray] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][100];

console.log(a1);
console.log(remainingArray, typeof remainingArray);

function restExample(...para1) {
  console.log(para1);
  [a] = para1;
  console.log(a);
}

restExample("1", "2", "3", "4", "5", "6");
