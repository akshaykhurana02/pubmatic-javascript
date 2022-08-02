// Spread Operator ...

// Array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// Objects

let obj1 = {
    firstName: "Akshay",
    lastName: "Khurana"
}

// console.log(obj1);

let obj2 = {
    firstName: "Rahul",
    lastName: "Dravid",
    age: 27,
    homeTown: "Delhi"
}

// console.log(obj2);

let obj3 = {
    ...obj1,
    ...obj2
}

// console.log(obj3);


let obj4 = {
    a: 1, // Pass by Value
    b: 2, // Pass by Value
    c: { // Pass by Reference
        x: 3,
        y: 4
    },
    d: ["Akshay", "Shri"] // Pass by Reference
}

let obj5 = {
    ...obj4,
    e: [1, 2, 3, 4, 5]
}

// console.log(obj5);

// setTimeout(() => {
//     obj4.a = 100;
//     obj4.b = 200;
//     obj4.c.x = 2;
//     obj4.d.push("Sanket");
//     console.log(obj5);
// }, 0);

var firstName;

var obj6 = {
    ...obj5,
    ...firstName
}

// console.log(obj6);


// Rest Parameter ...

function sumOf2Numbers(a, b) {
    return a + b;
}

function sumOf3Numbers(a, b, c) {
    return a + b + c;
}

function sumOfNumbers(...numbers) {
    return numbers.reduce((acc, i) => acc + i);
}

console.log(sumOf2Numbers(1, 2));
console.log(sumOf3Numbers(1, 2, 3));
console.log(sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
