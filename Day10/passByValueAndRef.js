// Pass By Value

// Number

let count1 = 0;
let count2 = count1;

// console.log(`Count 1 : ${count1}`);
// console.log(`Count 2 : ${count2}`);

count1++;

// console.log(`Count 1 : ${count1}`);
// console.log(`Count 2 : ${count2}`);

/*
    Memory Stack -


    count2 -> 0
    count1 -> 1


*/

// String

let name1 = "Akshay";
let name2 = name1;

// console.log(`Name 1 : ${name1}`);
// console.log(`Name 2 : ${name2}`);

name1 = name1.concat(" Khurana");

// console.log(`Name 1 : ${name1}`);
// console.log(`Name 2 : ${name2}`);

// Pass By Reference

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;

console.log(`Array 1 : ${arr1}`);
console.log(`Array 2 : ${arr2}`);

arr2.push(6);
arr2.push(6);

arr1.push(7);
arr1.push(7);

console.log(`Array 1 : ${arr1}`);
console.log(`Array 2 : ${arr2}`);

function pushANumber(array, number) {
  let arr1;
  arr1 = array;
  arr1.push(number);
}

pushANumber(arr1, 90);

console.log(`Array 1 : ${arr1}`);
console.log(`Array 2 : ${arr2}`);

// Object

let obj1 = {
  firstName: "Akshay",
  lastName: "Khurana",
};

let obj2 = obj1;

console.log(obj1.firstName);
// console.log(obj2.firstName);

let obj3 = {
  firstName: "Arun",
};

let obj4 = {
  firstName: "Arun",
};

obj3 = obj4;



/*
    Memory Stack -

    Before -

    obj4 -> 0x0000003
    obj3 -> 0x0000002
    obj2 -> 0x0000001
    obj1 -> 0x0000001


*/

/*
    Memory Stack -

    After -
    
    obj4 -> 0x0000003
    obj3 -> 0x0000003
    obj2 -> 0x0000001
    obj1 -> 0x0000001

*/

obj3 = {
  firstName: "Arun",
};

/*
    Memory Stack -

    After -
    
    obj4 -> 0x0000003
    obj3 -> 0x0000005
    obj2 -> 0x0000001
    obj1 -> 0x0000001


*/

let firstName = "Akshay"; // 12 Bytes
firstName = "Arun" // 8 Bytes