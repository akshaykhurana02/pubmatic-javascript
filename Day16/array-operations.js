// Array Operations

/*

    push
    pop
    shift
    unshift
    slice
    splice
    sort

*/


const names = ["Aman", "Arti", "Rama", "Surbhi", "Kamal"]; // x01, x05

// x06... x15

// console.log(names.length, typeof names);

// toString()

const namesToString = names.toString();
// console.log(names.toString());
// console.log(names);


// push

const n1 = names.push("Rohan"); // x16
const n2 = names.push("Kriti"); // x17

// console.log(names, n1, n2);

// pop

// console.log(names.pop()); // Kriti
// console.log(names);

// const arr1= [1, 2, 3];
// console.log(arr1);
// arr1[50] = 50;

// console.log(arr1.pop());
// console.log(arr1.pop());
// console.log(arr1.pop());

// console.log(arr1, arr1.length);

// console.log(arr1[80]);


const namesArray = ["Aman", "Rohan", "Sohan"];
// console.log(namesArray[1]); // Rohan

// shift

// console.log(namesArray.shift());
// console.log(namesArray);
// console.log(namesArray[1]); // Sohan


// unshift

namesArray.unshift("Akshay");
// console.log(namesArray);
// console.log(namesArray[1]); // Rohan


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
// console.log(fruits);


const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3];

const arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 1, 2, 3]
const arr4 = arr1.concat(5); // Pushed + Returned the new Array
// console.log(arr3);
// console.log(arr4);


// Splice

// Updating the same array
// Returning the array of removed elements

const arrNames = ["Akshay", "Arpit", "Arun", "Sonu"];
// arrNames.splice(1, 1, "Rohit", "Manav");
// console.log(arrNames.splice(1, 0, "Rohit", "Manav"));



// Slice

// Not changing the existing array
// Returning a new array

// console.log(arrNames);
// console.log(arrNames.slice(1, 3));
// console.log(arrNames.slice(1));


// Sort


const arrayOfNumbers = [2, 5, "A", 1, "901A", 41, 40, "Z", 5, 8];
const arrayOfCharacters = ["A", 61, 2, "B", 4, "G", "C", "E", 60, 500, 300, "78", "31", "23"];
const arrayOfMixedValues = arrayOfNumbers.concat(arrayOfCharacters);

const arrayOfNumbers1 = arrayOfNumbers.sort(function (a, b) { return a - b });
// console.log(arrayOfNumbers1);
arrayOfNumbers1.push(90);
// console.log(arrayOfNumbers1);
// console.log(arrayOfNumbers);
arrayOfNumbers.push(100);

// console.log(arrayOfNumbers1);
// console.log(arrayOfNumbers);

// console.log(arrayOfNumbers.sort(function (a, b) { return a - b })); // For Case of Numbers
// console.log(arrayOfCharacters.sort()); // Default

// console.log(arrayOfNumbers);
// console.log(arrayOfCharacters);

console.log(arrayOfMixedValues);
console.log(arrayOfMixedValues.sort()); // Doing ASCII Sorting
console.log(arrayOfMixedValues.sort(function (a, b) { return a - b }));

// forEach

arrayOfNumbers.forEach((n) => {
    return n * 2;
});