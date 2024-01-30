//Write a program that checks a temperature and prints "It's hot!" if the temperature is above 30 degrees Celsius, and "It's cool" otherwise.

import * as promptSync from 'prompt-sync';
const prompt = promptSync();

let temperature:number = parseInt(prompt("Enter the temperature: "));

if (temperature >= 30){
    console.log("It's hot!");
}
else if (temperature < 30 && temperature >= 0){
    console.log("It's cool!");
}
else{
    console.log("Temperature is in negative degrees!");
}