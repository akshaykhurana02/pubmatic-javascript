
/*

    Assignment - 26th July

    const users = [
        { firstName: "Akshay", lastName: "Khurana", age: 27 },
        { firstName: "Salman", lastName: "Khan", age: 55 },
        { firstName: "Riya", lastName: "Rajput", age: 34 },
        { firstName: "Simran", lastName: "Kapoor", age: 27 },
    ];

    Using reduce,
    Get this Output -> ["Salman Khan", "Riya Rajput"]
    
*/

const users = [
    { firstName: "Akshay", lastName: "Khurana", age: 27 },
    { firstName: "Salman", lastName: "Khan", age: 55 },
    { firstName: "Riya", lastName: "Rajput", age: 34 },
    { firstName: "Simran", lastName: "Kapoor", age: 27 },
];

// let initialValue = 0

// let newValue = users.reduce(function (accumulator, curValue) {
//     if (curValue.age > 27) {
//         console.log(curValue.firstName + " " + curValue.lastName)
//     }
//     return "";
// }, initialValue);

// let newValue = users.reduce(function (accumulator, curValue) {
//     if (curValue.age > 27) {
//         console.log(curValue.firstName + " " + curValue.lastName)
//     }
//     return "";
// }, []);

const printOutput = users.reduce((a, b) => {
    if (b.age > 27) {
        a.push(b.firstName + " " + b.lastName);
    }
    return a;
}, []);

console.log("output");
console.log(printOutput);


const filteredUsers = users.reduce((accumulator, currentIteration) => {
    if(currentIteration.age > 27) {
        accumulator.push(`${currentIteration.firstName} ${currentIteration.lastName}`);
    }
    return accumulator;
}, []);

console.log("Output -> ", filteredUsers);