function counter(type) {
  var count = 0;
  // if(type === "increment") {
  //     return function increment(){
  //         count++;
  //         console.log(count);
  //     }
  // } else {
  //     return function decrement(){
  //         count--;
  //         console.log(count);
  //     }
  // }
  return function incrementDecrement() {
    if (type == "increment") {
      count++;
    } else if (type == "decrement") {
      count--;
    }
    console.log(count);
  };
}

var incrementCounter = counter("increment");
var decrementCounter = counter("decrement");

incrementCounter();
incrementCounter();
incrementCounter();

decrementCounter();
decrementCounter();
decrementCounter();
