import *as promptSync from 'prompt-sync';
const prompt = promptSync();

class ATM {
    balance: number;
  
    constructor(balance: number) {
      this.balance = balance; 
    }
  
    withdraw(amount: number): void {
      if(amount % 5 === 0 && amount + 0.5 <= this.balance) {
        this.balance -= amount + 0.5;
        console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}`);
      } else {
        console.log('Invalid withdrawal amount. Please enter a multiple of 5.');
      }
    }
  }
  
  const poojaAccount = new ATM(100);
//   poojaAccount.withdraw(95); 
  poojaAccount.withdraw(100); 