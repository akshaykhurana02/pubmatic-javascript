// Call

function printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
}

let obj1 = {
    firstName: "Akshay",
    lastName: "Khurana"
}

let obj2 = {
    firstName: "Virat",
    lastName: "Kohli"
}

let obj3 = {
    firstName: "Rohit",
    lastName: "Sharma"
}

let obj4 = {
    firstName: "KL",
    lastName: "Rahul"
}

// Function Borrowing

// printFullName.call(obj1); // Akshay Khurana
// printFullName.call(obj2); // Virat Kohli
// printFullName.call(obj3); // Rohit Sharma
// printFullName.call(obj4); // KL Rahul


function printCompleteDetails(age, homeTown) {
    console.log(`${this.firstName} ${this.lastName} is ${age} years old. He is from ${homeTown}.`); 
}

// printCompleteDetails.call(obj1, 26, "Delhi");
// printCompleteDetails.call(obj2, 35);
// printCompleteDetails.call(obj3, 33, "Mumbai");
// printCompleteDetails.call(obj4, 30, "Bengaluru", "Akshay");



// Apply

printCompleteDetails.apply(obj1, [26, "Delhi"]); // Array of arguments
printCompleteDetails.apply(obj1, [26]);


// Bind

let printRahulDetailsUsingCall = printCompleteDetails.call(obj4, 30, "Bengaluru");
console.log(printRahulDetailsUsingCall);

let printRahulDetailsUsingBind = printCompleteDetails.bind(obj4, 30, "Bengaluru");
console.log(printRahulDetailsUsingBind);

printRahulDetailsUsingBind();
