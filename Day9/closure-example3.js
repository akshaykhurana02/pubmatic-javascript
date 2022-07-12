function x() {
  let a = 8;
  let b = 9;
  let c = 30;
  let d = 40;
  let e = 50;
  let condition = Math.ceil(Math.random() * 10); // Randomly generating a number b/w 0 - 9

  if (condition % 2 == 0) {
    return function y() {
      var num = 1;
      console.log(num);
      // console.log(a, b);
    };
  } else {
    return function z() {
      var f = 50;
      console.log(c, d, f);
    };
  }
}

var firstFunction = x();
firstFunction();
