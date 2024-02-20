//there are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Count the number of ways, the person can reach the top.

import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let stairs:number = parseInt(prompt("Enter the number of stairs: "));
let ways:number = 0;

for(let i:number = 0; i < stairs; i++){
    if(i % 2 === 0){
    ways += i;
    } else {
        ways += i - 1;
    }
}
console.log("The number of ways is: " + ways);