//Create a program for an online quiz. Ask the user a series of questions and provide feedback based on their answers. 
//Use loops for question iteration and conditional statements to evaluate responses.

import *as promptSync from 'prompt-sync';
const prompt = promptSync();

for (let i = 0; i < 2; i++){
    let question:string = prompt("Enter your question: ");
    let answer:string = prompt("Enter your answer: ");
    if (answer == "A"){
        console.log("Correct answer");
    }
    else if (answer == "B"){
        console.log("Incorrect answer");
    }
    else{
        console.log("Please enter a valid answer");
    }
}