// Inheritance

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class PubmaticEmployee extends Employee {
    constructor(firstName, lastName, phone) {
        super(firstName, lastName);
        this.phone = phone;
    }

    getPubmaticEmployeePhoneNumber() {
        return `${this.firstName} ${this.lastName}'s phone number is ${this.phone}.'`
    }
}

class DevelopersPubmatic extends PubmaticEmployee {
    constructor(firstName, lastName, phone, domain) {
        super(firstName, lastName, phone);
        this.domain = domain;
    }

    getPubmaticEmployeeDomain() {
        return this;
        // return `${this.getFullName()}'s domain is ${this.domain}`;
    }
}

let pubmaticEmployee1 = new PubmaticEmployee("Shri", "Prasad", "+918888877777");
// console.log(pubmaticEmployee1.getFullName());

let pubmaticDeveloper1 = new DevelopersPubmatic("Shri", "Prasad", "+918888877777", "Java");
// console.log(pubmaticDeveloper1);
console.log(pubmaticDeveloper1.getPubmaticEmployeeDomain());
