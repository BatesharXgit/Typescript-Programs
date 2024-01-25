"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var units = parseInt(prompt("Enter the units: "));
var extraChargesUnit = 0;
var cost = 0;
if (units > 100) {
    extraChargesUnit = units - 100;
    cost = (100 * 5) + (extraChargesUnit * 10);
    console.log("Cost with Extra Usage: ", cost);
}
else {
    cost = units * 5;
    console.log("Cost without Extra Usage: ", cost);
}
