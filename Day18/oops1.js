//   Object Oriented Programming


// Procedural Way

let firstName = "Akshay";
let lastName = "Khurana";
let domain = "JavaScript";

function getDetails(firstName, lastName, domain) {
    return `${firstName} ${lastName} is a ${domain} developer.`
}

// console.log(getDetails(firstName, lastName, domain));

// console.log(this); // Window Object


// Object Oriented Way

// Object Literal

var employee1 = {
    firstName: "Sonam",
    lastName: "Sharma",
    domain: "Python",
    getDetails: function() {
        // console.log(this); // Current Object
        return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
    }
}

var employee2 = {
    firstName: "Priya",
    lastName: "Kapoor",
    domain: "Java",
    getDetails: function() {
        // console.log(this); // Current Object
        return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
    }
}

console.log(employee1.getDetails());
console.log(employee2.getDetails());
