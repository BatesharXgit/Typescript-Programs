"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
console.log("Account Creation: ");
var depositAmount = 1000;
var button = parseInt(prompt("Enter any number from 1 to 3: "));
switch (button) {
    case 1:
        var newDepositAmount = parseInt(prompt("Enter the amount you want to deposit: "));
        depositAmount += newDepositAmount;
        console.log("Bank balance after deposit", depositAmount);
        break;
    case 2:
        var withdrawAmount = parseInt(prompt("Enter the amount you want to withdraw: "));
        if (depositAmount < withdrawAmount) {
            console.log("Insufficient balance");
        }
        else {
            depositAmount -= withdrawAmount;
            console.log("Bank balance after withdrawal", depositAmount);
        }
        break;
    case 3:
        console.log("Your Bank balance is", depositAmount);
        break;
    default:
        console.log("Invalid button");
}
