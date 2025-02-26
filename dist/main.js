"use strict";
var Saipa;
(function (Saipa) {
    Saipa.car = "pride";
    class Body {
        constructor(name, color) {
            this.name = name;
            this.color = color;
            this.name = name;
            this.color = color;
        }
        make() {
            console.log("car created successfully.");
        }
    }
    Saipa.Body = Body;
})(Saipa || (Saipa = {}));
let carName = Saipa.car;
let car = new Saipa.Body("pride", "white");
console.log(car);
