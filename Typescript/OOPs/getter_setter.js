"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Cars = /** @class */ (function () {
    function Cars() {
        this.brand = 'Lamborghini';
        this.model = "Urus";
    }
    Cars.prototype.setDetails = function (srNumber) {
        car.brand = prompt("Enter the brand: ");
        car.model = prompt("Enter the model: ");
        this.number = srNumber;
    };
    Cars.prototype.getDetails = function () {
        console.log("The brand of the car is: ", this.brand);
        console.log("The model of the car is: ", this.model);
        return this.number;
    };
    return Cars;
}());
var srNumber = prompt("Enter the number: ");
var car = new Cars();
car.setDetails(srNumber);
console.log("The Sr. ni. of car is: ", car.getDetails());
