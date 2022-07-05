// Loops

// While Loop

let n = 0;
let m = 0;

while (n < 3) {
  n++;
}

/*

    1st Iteration - 0 < 3 -> True -> 1
    2nd Iteration - 1 < 3 -> True -> 2
    3rd Iteration - 2 < 3 -> True -> 3
    4th Iteration - 3 < 3 -> False

*/

// console.log(`N = ${n}`);

// Do While Loop

do {
  m++;
} while (m <= 3);

/*

    1st Iteration - 1 -> 1 < 3 -> True
    2nd Iteration - 2 -> 2 < 3 -> True
    3rd Iteration - 3 -> 3 <= 3 -> True
    4th Itration - 4 -> 4 <=3 -> False

*/

// console.log(`M = ${m}`);

// For Loop

let str = "";
let i;

for (i = 0; i < 9; i++) {
  str = str + i;
}

// console.log(str);
// expected output: "012345678"

// Looping Arrays

const names = ["Akshay", "Ankit", "Rahul", "Sumit", "Aman"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// console.log("\n ************* \n");

// Loop Backwards

// for (let i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }

// Break

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

console.log("Outside for loop!");

// Continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

console.log("Outside for loop!");
