import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let weight:number = parseInt(prompt("Enter your weight: "));
let height:number = parseInt(prompt("Enter your height: "));

let heightinMeter:number = (height / 100);
let bmi:number = (weight / (heightinMeter * heightinMeter));

if (bmi < 18.5){
    console.log("Your BMI is: ", bmi,"You are underweight");
}
else if (bmi <= 18.5 && bmi >= 25){
    console.log("Your BMI is: ", bmi,"You are normal");
}
else {
    console.log("Your BMI is: ", bmi,"You are overweight");
}