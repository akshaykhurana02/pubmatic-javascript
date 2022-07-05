// Control Structures

// If else

// var a = 1;
// var b = 2;

/*

    if(conditon is true) {
        It will execute
    } else {
        This block will be executed
    }

*/

// if (a === 1) {
//   // Strict Equality Operator
//   // Do this
//   console.log("Value of a is 1");
// } else {
//   // Do that
//   console.log("Value of a is something else.");
// }

// if (a === 1) {
//   // Strict Equality Operator
//   // Do this
//   console.log("Value of a is 1");
// } else if (a === 2) {
//   // Do that
//   console.log("Value of a is 2");
// } else if (a === 3) {
//   // Do that
//   console.log("Value of a is 3");
// } else {
//   console.log("Value of a is something else.");
// }

// Nested If Loop

// if (a === 1) {
//   if (b === 2) {
//     console.log("A = 1, B = 2");
//   } else {
//     console.log("A = 1, B != 2");
//   }
// } else {
//   if (b === 2) {
//     console.log("A != 1, B = 2");
//   } else {
//     console.log("A != 1, B != 2");
//   }
// }

// Switch Case

// const expr = "Oranges";

// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//     console.log("Mangoes are $1.29 a pound.");
//     break;
//   case "Papayas":
//     console.log("Papayas are $2.79 a pound.");
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
//     break;
// }

// const number = "3";
// switch (
//   number // It checks both data type and the value
// ) {
//   case "1":
//     console.log("1");
//     break;
//   case "2":
//     console.log("2");
//     break;
//   case "3":
//     console.log("3");
//     break;
//   default:
//     console.log(`Something else`);
//     break;
// }

// Ternary Operator

const firstName = "Amit";
const lastName = "Singh";

// firstName === "Akshay"
//   ? console.log("Name is Akshay")
//   : console.log("Name is something else");

// if (firstName === "Akshay") {
//   console.log("Name is Akshay");
// } else {
//   console.log("Name is something else");
// }

firstName === "Akshay"
  ? lastName === "Khurana"
    ? console.log("Name is Akshay Khurana")
    : console.log("LastName is not Khurana")
  : console.log("Name is something else");
