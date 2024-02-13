"use strict";
//create a base class Bank, with the following data members: depositAmount, interestRate. Create three derived classes SBI, PNB, HDFC.
// In the derived classes, create a member function calculateInterest() to calculate the interest.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Bank = /** @class */ (function () {
    function Bank(depositAmount, interestRate) {
        this.depositAmount = depositAmount;
        this.interestRate = interestRate;
    }
    Bank.prototype.calculateInterest = function () {
        var interest = this.depositAmount * this.interestRate;
        console.log("The interest is: ", interest);
    };
    // setDetails(): void {
    //     console.log("Enter the deposit amount: ");
    //     this.depositAmount = parseInt(prompt());
    //     console.log("Enter the interest rate: ");
    //     this.interestRate = parseFloat(prompt());
    // }
    Bank.prototype.getDetails = function () {
        console.log("The deposit amount is: ", this.depositAmount);
        console.log("The interest rate is: ", this.interestRate);
    };
    return Bank;
}());
var SBI = /** @class */ (function (_super) {
    __extends(SBI, _super);
    function SBI() {
        return _super.call(this, 5000, 0.5) || this;
    }
    return SBI;
}(Bank));
var PNB = /** @class */ (function (_super) {
    __extends(PNB, _super);
    function PNB() {
        return _super.call(this, 5000, 0.4) || this;
    }
    return PNB;
}(Bank));
var HDFC = /** @class */ (function (_super) {
    __extends(HDFC, _super);
    function HDFC() {
        return _super.call(this, 5000, 0.3) || this;
    }
    return HDFC;
}(Bank));
var bankSBI = new SBI();
// bankSBI.setDetails();
bankSBI.calculateInterest();
bankSBI.getDetails();
var bankPNB = new PNB();
// bankPNB.setDetails();
bankPNB.calculateInterest();
bankPNB.getDetails();
var bankHDFC = new HDFC();
// bankHDFC.setDetails();
bankHDFC.calculateInterest();
bankHDFC.getDetails();
