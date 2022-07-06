let firstName = "Akshay";

function a() {
  var a = 1;
  b();
  function b() {
    c();
    function c() {
      console.log(a);
      console.log(firstName);
    }
  }
}

a();