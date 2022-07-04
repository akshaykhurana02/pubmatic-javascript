// Type Conversion

console.log(Number("3.9090909090"));  // returns 3.14
console.log(parseFloat("3.9090909090"));  // returns 3.14
console.log(parseInt("4.9999999"));  // returns 4
console.log(Number(" "));     // returns 0
console.log(Number(""));        // returns 0
console.log(Number("99 88"));   // returns NaN


var marks = 90;
console.log(marks, typeof marks);
console.log(90 + "");
console.log(String(marks), typeof String(marks));


// toPrecision

console.log(Number("3.9090909090").toPrecision(5));  // returns 3.14


console.log(Number(true));

console.log(true + "true");

let age = "20A";
console.log(typeof age);

console.log(+ age);
console.log(typeof + age); // + -> Unary Operator
