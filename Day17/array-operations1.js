// forEach Loop

const initialArray = [1, 2, 3, 4, 5];
// console.log(initialArray);

const triple = (n) => n * 3;

const doubleArray = [];

// initialArray.forEach((n) => {
//     doubleArray.push(n * 2);
// });

initialArray.forEach(triple);

// console.log(doubleArray);


const arrayOfNames = ["Akshay", "Arun", "Rishabh", "Samar", "Riya", "Kriti", "Shubham"];

// console.log(arrayOfNames);

// arrayOfNames.forEach(() => {
//     setTimeout(() => {
//         arrayOfNames.pop();
//         console.log(arrayOfNames);
//     }, 0);
// });

console.log("Before forEach");

// arrayOfNames.forEach(() => {
//     arrayOfNames.pop();
//     console.log(arrayOfNames);
// });

for(let i = 0; i < arrayOfNames.length; i++) {
    arrayOfNames.pop();
    console.log(arrayOfNames);
}

/*
    Initial Array = ["Akshay", "Arun", "Rishabh", "Samar", "Riya", "Kriti", "Shubham"]

    1st iteration -> i = 0 -> ["Akshay", "Arun", "Rishabh", "Samar", "Riya", "Kriti"]
    2nd iteration -> i = 1 -> ["Akshay", "Arun", "Rishabh", "Samar", "Riya"]
    3rd iteration -> i = 2 -> ["Akshay", "Arun", "Rishabh", "Samar"]
    4th iteration -> i = 3 -> ["Akshay", "Arun", "Rishabh"]
    5th iteration -> i = 4

*/

console.log("After forEach");

// console.log(arrayOfNames);
