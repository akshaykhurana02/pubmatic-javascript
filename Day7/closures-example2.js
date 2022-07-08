// function outerFunction(num) {
//   var a = 50;
//   function innerFunction() {
//     console.log(a, num);
//   }
//   return innerFunction;
// }

// var abcFunction = outerFunction(40);
// abcFunction(); // 50

//var abcFunction = outerFunction(40);
// outerFunction(40)();

function abc() {
  var para = "Shaun";
  return function anotherFunction(anotherVariable) {
    return function outerFunction(num) {
      var a = 50;
      return function innerFunction() {
        console.log(a, num, anotherVariable, para);
      };
    };
  };
}

abc()("Akshay")(2)();
