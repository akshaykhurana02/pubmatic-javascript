// Memory Management in Array

var arr = [];
var obj = { name: "John" };
var isBool = true;
var innerArray = [1, 2, 3];

arr.push(obj); // In case of objects/non primitve data types 
arr[1] = isBool;
arr[2] = innerArray;

console.log(arr[0]); // print obj.name
console.log(arr[1]); // print true
console.log(arr[2]); // print [1, 2, 3]

obj.age = 40;        // add age to obj
isBool = false;      // change value for isBool

console.log(arr[0]); // value here will contain age
console.log(arr[1]); // value here will still be true

console.log("Final Array ->", arr);