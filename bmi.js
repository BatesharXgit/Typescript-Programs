"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var weight = parseInt(prompt("Enter your weight: "));
var height = parseInt(prompt("Enter your height: "));
var heightinMeter = (height / 100);
var bmi = (weight / (heightinMeter * heightinMeter));
if (bmi < 18.5) {
    console.log("Your BMI is: ", bmi, "You are underweight");
}
else if (bmi <= 18.5 && bmi >= 25) {
    console.log("Your BMI is: ", bmi, "You are normal");
}
else {
    console.log("Your BMI is: ", bmi, "You are overweight");
}
