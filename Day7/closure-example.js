// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i + "\n");
//     }, i * 1000);
//   }
// }

// function y() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();
// y();

function x() {
  let j = 5;
  {
    let i = 1;
    setTimeout(function () {      
      console.log(i, j);
    }, 1000);
  }
  {
    let i = 2;
    setTimeout(function () {      
      console.log(i, j);
    }, 2000);
  }
  {
    setTimeout(function () {
      let i = 3;
      console.log(i, j);
    }, 3000);
  }
  {
    setTimeout(function () {
      let i = 4;
      console.log(i, j);
    }, 4000);
  }
}

x();
