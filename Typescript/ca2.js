"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var ATM = /** @class */ (function () {
    function ATM(balance) {
        this.balance = balance;
    }
    ATM.prototype.withdraw = function (amount) {
        if (amount % 5 === 0 && amount + 0.5 <= this.balance) {
            this.balance -= amount + 0.5;
            console.log("Withdrawal of ".concat(amount, " successful. New balance is ").concat(this.balance));
        }
        else {
            console.log('Invalid withdrawal amount. Please enter a multiple of 5.');
        }
    };
    return ATM;
}());
var poojaAccount = new ATM(100);
//   poojaAccount.withdraw(95); 
poojaAccount.withdraw(88);
