"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var amount = parseInt(prompt("Enter the amount"));
var currency = prompt("Enter the currency");
var conversionRate = parseInt(prompt("Enter the conversion rate"));
var convertedAmount = 0;
function converter() {
    if (currency == "usd") {
        convertedAmount = amount * conversionRate;
        console.log(convertedAmount);
    }
    else if (currency == "inr") {
        convertedAmount = amount * conversionRate;
        console.log(convertedAmount);
    }
    else {
        console.log("Please enter a valid currency");
    }
}
converter();
