// Object Operations

let student = {
  firstName: "Akshay",
  lastName: "Khurana",
  gender: "Male",
  city: "Noida",
};

let student1 = {
  firstName: "Akshay",
  lastName: "Khurana",
  gender: "Male",
  city: "Noida",
};

let emptyObject = {};

// Object is empty or not?

// Object.keys

console.log(Object.keys(student));
console.log(
  Object.keys(emptyObject).length == 0
    ? "Object is empty!"
    : "Object is not empty!"
);

// Object.values

console.log(Object.values(student));

// Adding a new Key

student.newKey = "ABC";
console.log(Object.keys(student));
console.log(Object.values(student));

student["anotherKey"] = "DEF";
console.log(Object.keys(student));
console.log(Object.values(student));

// Using Filter

let studentData = [
  {
    firstName: "Akshay",
    lastName: "Khurana",
    city: "Noida",
  },
  {
    firstName: "Sri",
    lastName: "Prasad",
    city: "Pune",
  },
  {
    firstName: "Mamta",
    lastName: "Bhagat",
    city: "Pune",
  },
];

let filteredData = studentData.filter((student) => {
  if (student.city == "Pune") return true;
  return false;
});

console.log(filteredData);

// Using Object.Values

let newData = [];

studentData.forEach((student) => {
  if (Object.values(student).includes("Pune")) {
    newData.push(student);
  }
});

console.log(newData);

// Object.entries

console.log(Object.entries(student));

/*

[
    [
        "firstName",
        "Akshay"
    ],
    [
        "lastName",
        "Khurana"
    ],
    [
        "gender",
        "Male"
    ],
    [
        "city",
        "Noida"
    ],
    [
        "newKey",
        "ABC"
    ],
    [
        "anotherKey",
        "DEF"
    ]
]

*/

// Object.is

console.log(Object.is(student, student1));
