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

let employee1 = new Employee("Arun", "Sharma", "Java", 24);
console.log(employee1);

function PubmaticEmployee(firstName, lastName, domain, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.domain = domain;
    this.age = age;
    this.getOfficeLocation = function () {
        return `Pune`
    }
}

let employee2 = new PubmaticEmployee("Arun", "Sharma", "Java", 24);
console.log(employee2.getAge());


// Prototype

// let arr1 = [1, 2, 3, 4, 5];
// let age = 24;

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
// console.log(employee3);

var arrayOfNumbers = [1 , 2, 3, 4, 5, 6];
var reversedArray = arrayOfNumbers.reverse();
// console.log(reversedArray);

var newArrayOfNumbers = new Array(1, 2, 3, 4, 5);
// console.log(newArrayOfNumbers);

Array.prototype.reverse = function() {
    return [];
}

// console.log(newArrayOfNumbers.reverse());
