function x() {
  let a = 8;
  let b = 9;
  let c = 30;
  let d = 40;
  let e = 50;
  let condition = Math.ceil(Math.random() * 10); // Randomly generating a number b/w 0 - 9

  function anotherFunction(para) {
    if (para % 2 == 0) {
      console.log("Function Y");
    } else {
      console.log("Function Z");
    }
    console.log(e);
  }

  function y() {
    console.log(a, b);
  }

  function z() {
    var f = 50;
    console.log(c, d, f);
  }

  return anotherFunction(condition);

  /*

  Parameter = Argument
  para = condition;

  */
}

var firstFunction = x();
firstFunction();
