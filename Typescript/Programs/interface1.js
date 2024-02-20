"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var MyCar = /** @class */ (function () {
    function MyCar() {
    }
    MyCar.prototype.getDetails = function (brandName, modelNumber) {
        this.brandName = brandName;
        this.modelNumber = parseInt(modelNumber);
        console.log("The car is ", this.brandName, "of model: ", this.modelNumber);
        return "".concat(this.brandName, " ").concat(this.modelNumber);
    };
    return MyCar;
}());
var myCar = new MyCar();
var brandName = prompt("Enter the brand name: ");
var modelNumber = prompt("Enter the model number: ");
console.log(myCar.getDetails(brandName, modelNumber));
