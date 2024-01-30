"use strict";
//Create a program that checks a student's score and prints "Pass" if the score is 50 or above, and "Fail" otherwise.
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var score = parseInt(prompt("Enter your score: "));
function checkScore(score) {
    if (score >= 50) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
}
checkScore(score);
