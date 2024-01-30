//Create a program that checks a student's score and prints "Pass" if the score is 50 or above, and "Fail" otherwise.

import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let score:number = parseInt(prompt("Enter your score: "));

function checkScore(score){
    if (score>=50){
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
}

checkScore(score);