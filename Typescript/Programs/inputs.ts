//Ram is given two or three inputs as an integer, if he has two integers then add the two numbers. If he has three inputs, 
//then multiply the three numbers.

import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let input:number = parseInt(prompt("Enter the number: "));
switch(input){
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

function addition (){
    let num1:number = parseInt(prompt("Enter the first number: "));
    let num2:number = parseInt(prompt("Enter the second number: "));
    console.log("The sum of ",num1, "and", num2, "is: " ,num1 + num2);
}

function multiplication (){
    let num1:number = parseInt(prompt("Enter the first number: "));
    let num2:number = parseInt(prompt("Enter the second number: "));
    let num3:number = parseInt(prompt("Enter the second number: "));
    console.log("The product of ",num1, "and", num2, "is: " ,num1 * num2 * num3);
}