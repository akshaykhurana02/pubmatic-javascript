// Async Await


// Example 1

// const getData = async () => {
//     var y = await "Hello World";
//     console.log(y);
// }

// console.log(1);
// getData();
// console.log(2);


// Example 2

// let studentsData = [
//     { firstName: "Akshay", lastName: "Khurana" },
//     { firstName: "Amit", lastName: "Goel" }
// ];

// const addNewRecord = async (record) => {
//     const promiseResolved = await setTimeout(() => {
//         studentsData.push(record);
//     }, 5000);
//     console.log(promiseResolved);
// }

// const printAllStudentData = () => {
//     setTimeout(() => {
//         let toBePrinted = "";
//         studentsData.forEach((student) => {
//             toBePrinted += `<li>${student.firstName}</li>`;
//         });
//         document.body.innerHTML += toBePrinted;
//     }, 0);
// }

// addNewRecord({ firstName: "Rohit", lastName: "Pal" });

const getData = async () => {
    var data = "Hello World";
    return data;
}

const getData1 = () => {
    return new Promise((resolve, reject) => {
        resolve("Hello World");
    });
}

getData().then(data => console.log(data));
getData1().then(data => console.log(data));