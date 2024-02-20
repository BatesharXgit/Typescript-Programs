import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let color = prompt("Enter the colour: ");

switch(color){
    case 'red' || 'Red':
        console.log("Traffic light turned to red, Kindly stop!");
        break;
    case 'yellow' || 'Yellow':
        console.log("Traffic light turned to yellow, Be ready to move!");
        break;
    case 'green' || 'Green':
        console.log("Traffic light turned to green, Now you can go!");
        break;
    default:
        console.log("Please enter a valid colour");
}