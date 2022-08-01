// Classes

// ES6 Convention

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let employee1 = new Employee("Akshay", "Khurana");
let employee2 = new Employee("Arun", "Khurana");
let employee3 = new Employee("Sohan", "Khurana");

console.log(employee1);
console.log(employee2);
console.log(employee3);