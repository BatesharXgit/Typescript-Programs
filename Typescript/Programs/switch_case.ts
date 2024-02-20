import * as promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Account Creation: ");
let depositAmount: number = 1000;

let button: number = parseInt(prompt("Enter any number from 1 to 3: "));

switch (button) {
    case 1:
        let newDepositAmount: number = parseInt(prompt("Enter the amount you want to deposit: "));
        depositAmount += newDepositAmount;
        console.log("Bank balance after deposit", depositAmount);
        break;
    case 2:
        let withdrawAmount: number = parseInt(prompt("Enter the amount you want to withdraw: "));
        if (depositAmount < withdrawAmount) {
            console.log("Insufficient balance");
        } else {
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

