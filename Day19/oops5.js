// Call, Apply, Bind

// Call

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
// }

// console.log(new Food('cheese', 5).name);
//   // expected output: "cheese"

// let firstName = "Akshay";
// let lastName = "Rajput";


// Example 1

const obj1 = {
    firstName: "Rohit",
    lastName: "Sharma"
};

const obj2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
};

function printName() {
    console.log(this);
    console.log(this.firstName + " " + this.lastName);
}

// printName();
// printName.call(obj1);
// printName.call(obj2);


// Example 2

function printEmployeeDetails(domain, phoneNumber) {
    console.log(this.firstName + " " + this.lastName + " is a " + domain + " developer. His phone number is " + phoneNumber + ".");
}

// printEmployeeDetails.call(obj1, "MERN", "+91955722222");


// Apply

printEmployeeDetails.apply(obj1, ["MERN", "+91955722222"]);