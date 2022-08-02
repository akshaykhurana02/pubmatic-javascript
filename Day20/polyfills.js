// Polyfill

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let arr3 = [...arr1, ...arr2];
// console.log(arr3);

let arr4 = arr1.concat(arr2);
console.log(arr4);


// Polyfill of concat

Array.prototype.concatNew = function (anotherArray) {
    return [...this, ...anotherArray]; // Using Spread Operator
}

Array.prototype.concatAnother = function (anotherArray) {
    let finalArray = this;
    for(let i = 0; i < anotherArray.length; i++) {
        finalArray.push(anotherArray[i]);
    }
    return finalArray;
}

let arr5 = arr1.concatNew(arr2);
console.log(arr5);

let arr6 = arr1.concatAnother(arr2);
console.log(arr6);
