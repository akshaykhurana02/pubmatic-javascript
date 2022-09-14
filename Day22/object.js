// Object.is

let obj1 = {
  firstName: "Akshay",
  lastName: "Khurana",
  gender: "Male",
  city: "Noida",
};

let obj2 = {
  firstName: "Akshay",
  lastName: "Khurana",
  gender: "Male",
  city: "Noida",
};

let obj3 = obj1;

console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj3));
