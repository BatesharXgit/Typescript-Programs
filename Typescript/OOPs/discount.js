"use strict";
//Madhu is tasked with developing a program to calculate the total price and discount for a list of discounted items. Create a 
//method called getDetails(). This method contains details about the name, item number, and price.
//A customer purchases n items. Write a program to display the item-wise bill and total amount. The program should also display 
//the total price of all items and the total discount amount.
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Discount = /** @class */ (function () {
    function Discount(name, itemNumber, price) {
        this.name = name;
        this.itemNumber = itemNumber;
        this.price = price;
    }
    Discount.prototype.getDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("Item Number: ".concat(this.itemNumber));
        console.log("Price: ".concat(this.price));
    };
    Discount.prototype.getTotalPrice = function () {
        return this.price;
    };
    Discount.prototype.getTotalDiscount = function () {
        return this.price * 0.1;
    };
    Discount.prototype.getTotalAmount = function () {
        return this.price - (this.price * 0.1);
    };
    return Discount;
}());
var discount1 = new Discount("A", 1, 500);
var discount2 = new Discount("B", 2, 200);
var discount3 = new Discount("Eraser", 3, 30);
discount1.getDetails();
console.log("Total Price: ".concat(discount1.getTotalPrice()));
console.log("Total Discount: ".concat(discount1.getTotalDiscount()));
console.log("Total Amount: ".concat(discount1.getTotalAmount()));
discount2.getDetails();
console.log("Total Price: ".concat(discount2.getTotalPrice()));
console.log("Total Discount: ".concat(discount2.getTotalDiscount()));
console.log("Total Amount: ".concat(discount2.getTotalAmount()));
