let firstName = "Akshay";
let lastName = "Khurana";
let domain = "JavaScript";

var employee1 = {
    firstName: "Urvashi", // property
    lastName: "Rawat",
    domain: "Python",
    getDetails: function() { // method
        return `${this.firstName} ${this.lastName} is a ${this.domain} developer.`
    }
}

firstName = "Arun";
lastName = "Sharma";
domain = "MERN";

console.log(employee1);

console.log(Object.keys(employee1)); // ["firstName", "lastName", "domain", "getDetails"]
console.log(Object.values(employee1));
