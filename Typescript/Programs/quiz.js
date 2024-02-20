"use strict";
//Create a program for an online quiz. Ask the user a series of questions and provide feedback based on their answers. 
//Use loops for question iteration and conditional statements to evaluate responses.
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
for (var i = 0; i < 2; i++) {
    var question = prompt("Enter your question: ");
    var answer = prompt("Enter your answer: ");
    if (answer == "A") {
        console.log("Correct");
    }
    else if (answer == "B") {
        console.log("Incorrect");
    }
    else {
        console.log("Please enter a valid answer");
    }
}
