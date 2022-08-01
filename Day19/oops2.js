// ES5 Convention of creating classes/constructor function

function EmployeeES5(firstName, lastName, domain, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.domain = domain;
    this.age = age;
}

EmployeeES5.prototype.getDetails = function () {
    return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
}


// ES6 Convention of creating classes

class EmployeeES6 {
    constructor(firstName, lastName, domain, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.domain = domain;
        this.age = age;
    }

    getDetails() {
        return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
    }
}

let employee1 = new EmployeeES5("Akshay", "Khurana", "JavaScript", 26);
let employee2 = new EmployeeES6("Akshay", "Khurana", "JavaScript", 26);

console.log(employee1);
console.log(employee2);

