// Event Loop

console.log("Hello!");

Promise.resolve().then((p1) => console.log("Promise 1"));

setTimeout(function y() {
  // Promise.resolve().then((p1) => {
  //   console.log("Promise B");
  // });
  console.log("Timeout 1!");
}, 2);

setTimeout(function x() {
  Promise.resolve().then((p1) => {
    // for(let i = 0; i < 10000000000; i++) {}
    console.log("Promise A");
  });
}, 0);

console.log("How are you?");

Promise.resolve().then((p1) => console.log("Promise 3"));

console.log("Bye!");

// Callback Queue Or Task Queue Or Macro Task Queue

/*

  Using setTimeout, DOM APIs, Local Storage, Location etc.

*/

// MicroTask Queue

/*

  Promises, Mutation Observer

*/
