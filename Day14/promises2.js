let studentsArray = [
    { firstName: "Arun", lastName: "Lal" },
    { firstName: "Ravi", lastName: "Shastri" }
];

console.log("Hi");

// let studentsArray = "Akshay";
let errorMessage = "";

function enrollNewStudent(student) {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        try {
            studentsArray.push(student);
            console.log("New Student Record Added!");
            resolve();
        } catch (e) {
            reject(e);
        } finally {
            console.log("Finally Block Executed!");
        }
        // }, 5);
    });
}

function setErrorMessage(message) {
    errorMessage = message;
}

enrollNewStudent({ firstName: "Akshay", lastName: "Khurana" }).then(() => console.log("Promises Succeded!"));

// function printMyName() {
//     console.log("Akshay Khurana");
// }

// printMyName();

setTimeout(() => {
    console.log("Set Timeout Called!");
}, 0);

console.log("Bye");