//Flight booking system

import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let category:string = prompt("Enter the class: ");
switch(category){
    case 'business':
        console.log("Business class");
        businessClass();
        break;
    case 'economy':
        console.log("Economy class");
        economyClass();
        break;
    default:
        console.log("Please enter a valid class");
}

function businessClass(){
    let name:string = prompt("Enter your name: ");
    let payment:string = prompt("Enter your payment method: ");
    let from:string = prompt("Enter the origin: ");
    let to:string = prompt("Enter the destination: ");
    let totalAmount:number = 30000;
    if(payment == 'credit'){
        console.log("Ticket booked for ", name , "from ", from , "to", to , '\n Have a safe Journey, Visit again.');
        console.log("You got 10% discount on your journey.\n Your total amount is: ", totalAmount - (totalAmount * 0.1));
    }
    else{
        console.log("Ticket booked for ", name , "from ", from , "to", to , '\n Have a safe Journey, Visit again.');
        console.log("Total amount: ", totalAmount);
    }
}

function economyClass(){
    let name:string = prompt("Enter your name: ");
    let payment:string = prompt("Enter your payment method: ");
    let from:string = prompt("Enter the origin: ");
    let to:string = prompt("Enter the destination: ");
    let totalAmount:number = 30000;
    if(payment == 'credit'){
        console.log("Ticket booked for ", name , "from ", from , "to", to , '\n Have a safe Journey, Visit again.');
        console.log("You got 10% discount on your journey.\n Your total amount is: ", totalAmount - (totalAmount * 0.1));
    }
    else{
        console.log("Ticket booked for ", name , "from ", from , "to", to , '\n Have a safe Journey, Visit again.');
        console.log("Total amount: ", totalAmount);
    }
}