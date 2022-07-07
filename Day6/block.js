// Block or Compound Statement

// {

// }

// var a = 1;

// if(a == 1) {
//   console.log("A is 1");
//   console.log("ABC");
// }

// if(a == 1) console.log("A is 1");

// var a = 10;
// let b = 20;
// const c = 30;
// let z = 40;

// {
//   var a = 12;
//   let b = 22;
//   const c = 32;
//   console.log(a, b, c, z); // 12 22 32 40
// }
// console.log(a, b, c); // 12 20 30

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   {
//     var a = 11;
//     let b = 21;
//     const c = 31;
//     console.log(a, b, c);
//     {
//       var a = 12;
//       let b;
//       const c = 32;
//       console.log(a, b, c);
//     }
//   }
//   console.log(a, b, c);
// }

// function f1() {
//   //var a = 40;
//   console.log(a);
// }

// f1();

// // let b = 21;
// // const c = 31;

// console.log(a);





// Var Scoping

// In case of Block

// var b = 1;
// console.log(b); // 1

// {
//   var b = 20;
//   console.log(b); // 20
// }

// console.log(b); // 20


// In case of Function

// var a = 10;
// console.log(a); // 10

// function first() {
//   var a = 20;
//   console.log(a); // 20
// }

// first();

// console.log(a); // 10


// Let & Const


// Function

// let a = 1;
// console.log(a); // 1

// function first() {
//   let a = 2;
//   console.log(a); // 2
// }

// first();
// console.log(a); // 1


// Block


let b = 2;
console.log(b); // 2

function second() {
  let b = 4;
  console.log(b); // 4
}

second();
console.log(b); // 2