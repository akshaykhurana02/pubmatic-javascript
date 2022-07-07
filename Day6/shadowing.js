// Shadowing

var a = 10;
let b = 5;
const c = 20;
{
  let a = 13;
  let b = 20;
  const c = 30;
  console.log(a, b, c); // 13 20 30
}

console.log(a); // 10
console.log(b); // 5
console.log(c); // 20