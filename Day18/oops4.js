// OOPS Concepts

/*
    Encapsulation
    Abstraction
    Inheritance
    Polymorphism
*/





// Constructor Function

function Employee(firstName, lastName, domain, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.domain = domain;
    this.age = age;
    this.getDetails = function () {
        return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
    }
    this.getAge = function () {
        return `${this.firstName} ${this.lastName} is ${this.age} year(s) old.`
    }
}

const employee1 = new Employee("Akshay", "Khurana", "Java", 26);
console.log(employee1);
const employee2 = new Employee("Arun", "Khurana", "Java", 26);
console.log(employee2);
// const employee3 = new Employee("Smriti", "Khurana", "Java", 26);
// console.log(employee3);
// const employee4 = new Employee("Rohan", "Khurana", "Java", 26);
// console.log(employee4);
// const employee5 = new Employee("Alok", "Khurana", "Java", 26);
// console.log(employee5);

// const employee2 = new Employee("Surbhi", "Sharma", "Java", 41);
// console.log(employee2);
// console.log(employee2.getAge());






// Prototype

function EmployeeNew(firstName, lastName, domain, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.domain = domain;
    this.age = age;
}

EmployeeNew.prototype.getDetails = function () {
    return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
}

const employee3 = new EmployeeNew("Akshay", "Khurana", "Java", 26);
console.log(employee3);
