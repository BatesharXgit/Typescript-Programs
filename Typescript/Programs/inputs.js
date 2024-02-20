"use strict";
//Ram is given two or three inputs as an integer, if he has two integers then add the two numbers. If he has three inputs, 
//then multiply the three numbers.
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var input = parseInt(prompt("Enter the number"));
switch (input) {
    case 2:
        console.log("Slected 2, addition will be done");
        addition();
        break;
    case 3:
        console.log("Selected 3, multiplication will be done");
        multiplication();
        break;
    default:
        console.log("Please enter a valid input");
}
function addition() {
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    console.log("The sum of ", num1, "and", num2, "is: ", num1 + num2);
}
function multiplication() {
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    var num3 = parseInt(prompt("Enter the second number: "));
    console.log("The product of ", num1, "and", num2, "is: ", num1 * num2 * num3);
}
