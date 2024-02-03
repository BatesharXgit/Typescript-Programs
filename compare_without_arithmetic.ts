//check the two number are equal without using arithmetic operator

import * as promptsync from 'prompt-sync';
const prompt = promptsync();

let a: number = parseInt(prompt("Enter first number: "));
let b: number = parseInt(prompt("Enter second number: "));

// if (a === b) {
//     console.log("The two numbers are equal.");
// } else {
//     console.log("The two numbers are not equal.");
// }

if(!(a ^ b)){
    console.log("The two numbers are equal.");
} else {
    console.log("The two numbers are not equal.");
}