//create a base class Bank, with the following data members: depositAmount, interestRate. Create three derived classes SBI, PNB, HDFC.
// In the derived classes, create a member function calculateInterest() to calculate the interest.

import * as promptSync from "prompt-sync";
const prompt = promptSync();

class Bank {
    depositAmount: number;
    interestRate: number;
}

class SBI extends Bank {

    calculateInterest(depositAmount: number, interestRate: number): void {
        let interest = depositAmount * interestRate;
        console.log("The interest is: ", interest);
    }

    setDetails(): void {
        console.log("The details for SBI bank is: ");
        this.depositAmount = parseInt(prompt("Enter the deposit amount: "));
        this.interestRate = parseFloat(prompt("Enter the interest rate: "));

    }

    getDetails(): void {
        console.log("The deposit amount is: ", this.depositAmount);
        console.log("The interest rate is: ", this.interestRate);
    }
}

class PNB extends Bank {

    calculateInterest(depositAmount: number, interestRate: number): void {
        let interest = depositAmount * interestRate;
        console.log("The interest is: ", interest);
    }

    setDetails(): void {
        console.log("The details for PNB bank is: ");
        this.depositAmount = parseInt(prompt("Enter the deposit amount: "));
        this.interestRate = parseFloat(prompt("Enter the interest rate: "));

    }

    getDetails(): void {
        console.log("The deposit amount is: ", this.depositAmount);
        console.log("The interest rate is: ", this.interestRate);
    }
}

class HDFC extends Bank {

    calculateInterest(depositAmount: number, interestRate: number): void {
        let interest = depositAmount * interestRate;
        console.log("The interest is: ", interest);
    }

    setDetails(): void {
        this.depositAmount = parseInt(prompt("Enter the deposit amount: "));
        this.interestRate = parseFloat(prompt("Enter the interest rate: "));

    }

    getDetails(): void {
        console.log("The details for HDFC bank is: ");
        console.log("The deposit amount is: ", this.depositAmount);
        console.log("The interest rate is: ", this.interestRate);
    }
}

const bankSBI = new SBI();
bankSBI.setDetails();
bankSBI.calculateInterest;
bankSBI.getDetails();

const bankPNB = new PNB();
bankPNB.setDetails();
bankPNB.calculateInterest;
bankPNB.getDetails();

const bankHDFC = new HDFC();
bankHDFC.setDetails();
bankHDFC.calculateInterest;
bankHDFC.getDetails();
