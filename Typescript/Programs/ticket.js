"use strict";
//Flight booking system
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var category = prompt("Enter the class: ");
var payment = prompt("Enter your payment method");
switch (category) {
    case 'business':
        console.log("Business class");
        businessClass();
        break;
    case 'economy':
        console.log("Economy class");
        economyClass();
        break;
    default:
        console.log("Please enter a valid class");
}
function businessClass() {
    var name = prompt("Enter your name: ");
    var payment = prompt("Enter your payment method: ");
    var from = prompt("Enter the origin: ");
    var to = prompt("Enter the destination: ");
    var totalAmount = 30000;
    if (payment == 'credit') {
        console.log("Ticket booked for ", name, "from ", from, "to", to, '\n Have a safe Journey, Visit again.');
        console.log("You got 10% discount on your journey.\n Your total amount is: ", totalAmount - (totalAmount * 0.1));
    }
    else {
        console.log("Ticket booked for ", name, "from ", from, "to", to, '\n Have a safe Journey, Visit again.');
        console.log("Total amount: ", totalAmount);
    }
}
function economyClass() {
    var name = prompt("Enter your name: ");
    var payment = prompt("Enter your payment method: ");
    var from = prompt("Enter the origin: ");
    var to = prompt("Enter the destination: ");
    var totalAmount = 30000;
    if (payment == 'credit') {
        console.log("Ticket booked for ", name, "from ", from, "to", to, '\n Have a safe Journey, Visit again.');
        console.log("You got 10% discount on your journey.\n Your total amount is: ", totalAmount - (totalAmount * 0.1));
    }
    else {
        console.log("Ticket booked for ", name, "from ", from, "to", to, '\n Have a safe Journey, Visit again.');
        console.log("Total amount: ", totalAmount);
    }
}
