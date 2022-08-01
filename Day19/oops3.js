// Classes

class Vehicle {
    constructor(brand, model, yearOfRegistration) {
        this.brand = brand;
        this.model = model;
        this.yearOfRegistration = yearOfRegistration;
    }
}

class Car extends Vehicle {
    constructor(brand, model, yearOfRegistration) {
        super(brand, model, yearOfRegistration);
    }

    move() {
        return `${this.model} moved!`
    }
}

class Bus extends Vehicle {
    constructor(brand, model, yearOfRegistration) {
        super(brand, model, yearOfRegistration);
    }

    numberOfPassengers() {
        return `20!`
    }
}

let car1 = new Car('Hyundai', 'i20', 2021);
let car2 = new Car('Hyundai', 'Creta', 2019);

console.log(car1.move());
console.log(car2.move());