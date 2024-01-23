import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let radius:number = parseInt(prompt("Enter the radius: "));
let pi:number = 3.14;

let button:number = parseInt(prompt("Press 1 to find Area & 2 to find Circumference: "));

switch(button){
    case 1:
        areaOfCircle();
        break;
    case 2:
        circumferenceOfCircle();
        break;
    default:
        console.log("Invalid Input");
        break;
}

function areaOfCircle() {
    let area:number = (pi * radius * radius);
    console.log("The area of circle is: ", area);
}

function circumferenceOfCircle() {
    let circumference:number = (2 * pi * radius);
    console.log("The Circumference of circle is: ", circumference);
}

// areaOfCircle();
// circumferenceOfCircle();