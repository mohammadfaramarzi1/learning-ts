"use strict";
class Car {
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.name = name;
        this.color = color;
        this.model = model;
    }
    drive(speed) {
        console.log(`${this.name} drives ${speed} km/h`);
    }
}
class Truck extends Car {
    constructor(name, color, model) {
        super(name, color, model);
        this.name = name;
        this.color = color;
        this.model = model;
    }
    load(weight) {
        console.log(`set ${weight}(kg) load on ${this.name}`);
    }
}
const useCar = (car) => {
    if (car instanceof Truck) {
        car.load("120");
    }
    else if (car instanceof Car) {
        car.drive(120);
    }
};
const pride = new Car("Pride", "White", 1403);
useCar(pride);
