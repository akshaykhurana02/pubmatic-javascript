// Event Loop

console.log("Hello!");

Promise.resolve().then((p1) => console.log("Promise 1"));

setTimeout(function y() {
  console.log("Timeout 1!");
}, 1000);

setTimeout(function x() {
  console.log("Timeout 2!");
}, 0);

console.log("How are you?");

Promise.resolve().then((p1) => console.log("Promise 2"));

Promise.resolve().then((p1) => console.log("Promise 3"));

Promise.resolve().then((p1) => console.log("Promise 4"));

Promise.resolve().then((p1) => console.log("Promise 5"));

console.log("Bye!");



// Callback Queue Or Task Queue Or Macro Task Queue

/*

  Using setTimeout, DOM APIs, Local Storage, Location etc.

*/

// MicroTask Queue

/*

  Promises, Mutation Observer

*/
