//find the number whose sum is divisible by 3 or 5 or 7
import * as promptsync from 'prompt-sync';
const prompt = promptsync();

let num: number = parseInt(prompt("Enter the number: "));
let sum: number = 0;
let digit: number = 0;
let number: number = num;

while (num !== 0) {
    digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
}

if (sum % 3 === 0 || sum % 5 === 0 || sum % 7 === 0) {
    console.log("You can take the number: ", number, "for your vehicle: ");
}
else{
    console.log("You can't take the number: ", number, "for your vehicle: ");
}
