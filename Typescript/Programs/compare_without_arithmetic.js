"use strict";
//check the two number are equal without using arithmetic operator
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var a = parseInt(prompt("Enter first number: "));
var b = parseInt(prompt("Enter second number: "));
// if (a === b) {
//     console.log("The two numbers are equal.");
// } else {
//     console.log("The two numbers are not equal.");
// }
if (!(a ^ b)) {
    console.log("The two numbers are equal.");
}
else {
    console.log("The two numbers are not equal.");
}
