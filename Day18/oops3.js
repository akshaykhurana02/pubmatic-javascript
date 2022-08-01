// Primitive Data Types

/*
    String, Number, Boolean, undefined, null
*/

var firstName = "Akshay";
// console.log(firstName, typeof firstName);

var lastName = new String("Khurana");
// console.log(lastName, typeof lastName);

var rollNumber = new Number(26);
// console.log(rollNumber, typeof rollNumber);


// Construtor Function

// function Book() {
//     console.log('Book Initialised');
// }

// let book1 = new Book();
// let book2 = new Book();


// var employee1 = {
//     firstName: "Sonam",
//     lastName: "Sharma",
//     domain: "Python",
//     getDetails: function() {
//         // console.log(this); // Current Object
//         return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
//     }
// }

function Employee(firstName, lastName, domain) {
    console.log("Constructor of Employee Called");
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.domain = domain;
    console.log(this);
    this.getDetails = function () {
        return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
    }
}

const employee1 = new Employee("Akshay", "Khurana", "Java");
console.log(employee1);
console.log(employee1.getDetails());

console.log(`\n\n\n\n\n`);

const employee2 = Employee("Arun", "Mittal", "Java");
console.log(employee2);

// New Keyword

/*
    1. Calls the Constructor Function
    2. Will point this to current object
    3. It returns the current object

*/




