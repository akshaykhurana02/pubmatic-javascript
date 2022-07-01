// Object

let object1 = {
  firstName: "Raj",
  lastName: "Kapoor",
  age: 51,
};

// Single Line Comment

/*

This is a multi line comment

All this will be treated as a comment

*/

// Primitive Datatypes

// Number

var age = 20;
console.log(age); // 20
console.log(typeof age); // number

var radius = 2.5;
var circumference = 2 * 3.14 * 2.5;

console.log("Circumference ", circumference);
console.log("Circumference ", Math.ceil(circumference)); // 16
console.log("Circumference ", Math.floor(circumference)); // 15
console.log(radius, circumference, age, typeof age, typeof radius);

console.log(typeof circumference);

// String

circumference = "Samsung";
console.log(circumference, typeof circumference);

let fullName = "Akshay Khurana"; // With double quotes
let anotherName = "Aman Garg"; // With single quotes
console.log(fullName);
console.log(anotherName);

fullName = "Sonam Kapoor ";
console.log(fullName);

console.log(fullName.charAt(2)); // n
console.log(fullName.replace("a", "z"));

fullName = fullName + "ABC";
console.log(fullName);

const favouriteColour = "Green";
console.log(favouriteColour, typeof favouriteColour);

//favouriteColour = "Black";

// Boolean

var age = true; // Here, we are declaring the already decalred variable
console.log(age, typeof age);

//let fullName = "Salman Khan";

fullName = false;
console.log(fullName, typeof fullName);

// undefined

console.log(thirdName); // undefined

//console.log(secondName);
//console.log(favouriteMovie);

let secondName;
secondName = "Preeti";
console.log(secondName);
//console.log(typeof secondName);

var thirdName;
thirdName = "Rishabh";
console.log(thirdName);
//console.log(typeof thirdName);

const favouriteMovie = "ABC";
console.log(favouriteMovie);

// null

let flagValue = null;
console.log(flagValue, typeof flagValue);

console.log("Akshay Khurana");

let flagValue1 = "";

console.log(flagValue === name1);
console.log(flagValue == flagValue1);

// Strict Equality Operator
// ===
// It checks both value and the datatype

// Equality Operator
// ==
// It checks only the value

var obj1 = "6";
var obj2 = 6;

console.log(obj1 == obj2); // true
console.log(obj1 === obj2); // false

// Array

let arrayOfNumbers = [];
arrayOfNumbers.push(1);
arrayOfNumbers.push(2);
arrayOfNumbers.push(3);
arrayOfNumbers.push(4);
console.log(arrayOfNumbers); // [1, 2, 3, 4]

let arrayOfNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayOfNumbers1);

let array1 = [1, "ABC", true, null, { firstName: "Akshay" }, [1, 2, 3, 4]];
console.log(array1);

console.log(typeof array1);

printMyName();
printMyLastName();

// Hoisting

var name1 = "Sneha";
let name2 = name1;

console.log(name1);
console.log(name2);

// It will be added in the Global Scope, and we can accsss it before intialisation
function printMyName() {
    console.log("My name is Akshay");
}

let printMyLastName = function() {
    console.log("My Last Name is Khurana");
}

printMyLastName();