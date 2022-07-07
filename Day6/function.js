var a = 20;

function b() {
  var a = 1;
  console.log(a);

  c();

  function c() {
    console.log(a);
    console.log(window.a);
  }
}

b();

console.log(window.a);
