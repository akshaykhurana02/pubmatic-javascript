// Arithematic Operators

let birthYear = 1995;
let age = 2022 - birthYear;

console.log(age); // 27

console.log(2 + 4 + 5);

let firstName = "Akshay";
let secondName = "Khurana";

console.log(firstName + " " + secondName);

console.log(2 + 4 + 5 + "Aman");

let var1 = 23;
let var2 = 34;
let var3 = "ABC";

let var4 = var1 + var2;
let var5 = var1 + var3;

console.log(var4, typeof var4);
console.log(var5, typeof var5);

/*

number + number = number
string + number = string
number + string = string
string + string = string

*/

console.log("Aman" + 2 + 4 + 5); // Aman245
console.log("Aman" + 2 - 4 + 5); // NaN
console.log("Aman" + 2 * 4 + 5); // Aman85

/*

1st Step = Aman + 2 = Aman2
2nd Step = Aman2 + 4 = Aman24
3rd Step = Aman24 + 5 = Aman245

*/

console.log(7 + 2 + "Aman" + 2 + 4 + 5); // 9Aman245

console.log(3 * 2);
console.log(2 + 3 + 7 * 3 - 2);

/*

1st Step -> 2 + 3 + 21 - 2

*/

console.log(2 + 6 / 2 + 7 * 3 - 2);


// Operator Precedence Table

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// Assignment Operator

let sum = 2 + 5;
sum = sum + 7;
sum += 7; // sum = sum + 7
console.log(sum);




// Comparison Operator

let isGreater = 13 >= 21;
console.log(isGreater);

let isSmaller = 13 <= 13;
console.log(isSmaller);

// let let = 10;
// console.log(let);


// Logical Operators

console.log(true || false); // true
console.log(true && false); // false\

const variable1234 = 23 && true; // true
console.log(variable1234, typeof variable1234);

const variable123 = 0 && true; // true
console.log(variable123, typeof variable123);

let isAgeGreater = 11 > 20;
console.log(isAgeGreater && true); // true


// Strict Inequality

let variable1 = 23;
let variable2 = 23;