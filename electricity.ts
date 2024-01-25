import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let units:number = parseInt(prompt("Enter the units: "));
let extraChargesUnit:number = 0;
let cost:number = 0;

if (units > 100){
    extraChargesUnit = units - 100;
    cost = (100 * 5) + (extraChargesUnit * 10); 
    console.log("Cost with Extra Usage: ", cost);
}
else{
    cost = units * 5;
    console.log("Cost without Extra Usage: ", cost);
}
