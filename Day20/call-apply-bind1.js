// Call

let obj1 = {
    firstName: "Akshay",
    lastName: "Khurana",
    printFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let obj2 = {
    firstName: "Virat",
    lastName: "Kohli"
}

obj1.printFullName();

// Function Borrowing

obj1.printFullName.call(obj2);


// OR

let obj3 = {
    firstName: "Rahul",
    lastName: "Dravid"
}

function printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
}

let obj4 = {
    firstName: "Dinesh",
    lastName: "Mongia"
}

// printFullName.call(obj3);
// printFullName.call(obj4);


function printCompleteDetails(hometown, age) {
    console.log(`${this.firstName} ${this.lastName} is ${age} years old. He is from ${hometown}.`);
}

// printCompleteDetails.call(obj3, "Delhi", 45);



// Apply

// printCompleteDetails.apply(obj3, ["Delhi", 45]);


// Bind

// let printRahulDetails = printCompleteDetails.bind(obj3, "Bengaluru", 45);
// console.log(printRahulDetails);
// printRahulDetails();


// obj3.firstName = "Shikhar";
// obj3.lastName = "Dhawan";


// let arr1 = [1, 2];
// let arr2 = arr1.concat([3, 4]);
// console.log(arr2);
