//create a base class Bank, with the following data members: depositAmount, interestRate. Create three derived classes SBI, PNB, HDFC.
// In the derived classes, create a member function calculateInterest() to calculate the interest.

import * as promptSync from "prompt-sync";
const prompt = promptSync();

class Bank {
    protected depositAmount: number;
    protected interestRate: number;

    constructor(depositAmount: number, interestRate: number) {
        this.depositAmount = depositAmount;
        this.interestRate = interestRate;
    }

    calculateInterest(): void {
        let interest = this.depositAmount * this.interestRate;
        console.log("The interest is: ", interest);
    }

    setDetails(): void {
        console.log("Enter the deposit amount: ");
        this.depositAmount = parseInt(prompt());
        console.log("Enter the interest rate: ");
        this.interestRate = parseFloat(prompt());
    }

    getDetails(): void {
        console.log("The deposit amount is: ", this.depositAmount);
        console.log("The interest rate is: ", this.interestRate);
    }
}

class SBI extends Bank {
    constructor() {
        super(0, 0);
    }

    setDetails(): void {
        console.log("Enter the details for SBI bank:");
        super.setDetails();
    }
}

class PNB extends Bank {
    constructor() {
        super(0, 0); 
    }

    setDetails(): void {
        console.log("Enter the details for PNB bank:");
        super.setDetails();
    }
}

class HDFC extends Bank {
    constructor() {
        super(0, 0); 
    }

    setDetails(): void {
        console.log("Enter the details for HDFC bank:");
        super.setDetails();
    }
}

const bankSBI = new SBI();
bankSBI.setDetails();
bankSBI.calculateInterest();
bankSBI.getDetails();

const bankPNB = new PNB();
bankPNB.setDetails();
bankPNB.calculateInterest();
bankPNB.getDetails();

const bankHDFC = new HDFC();
bankHDFC.setDetails();
bankHDFC.calculateInterest();
bankHDFC.getDetails();
