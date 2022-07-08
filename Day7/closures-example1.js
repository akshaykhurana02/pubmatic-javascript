// var num = "FirstName";

function outerFunction(num) {
    var a = 50;
    function innerFunction() {
        console.log(a, num);
    }
    return innerFunction;
}

var abcFunction = outerFunction(40);
abcFunction(); // 50