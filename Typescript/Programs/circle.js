"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var radius = parseInt(prompt("Enter the radius: "));
var pi = 3.14;
var button = parseInt(prompt("Press 1 to find Area & 2 to find Circumference: "));
switch (button) {
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
    var area = (pi * radius * radius);
    console.log("The area of circle is: ", area);
}
function circumferenceOfCircle() {
    var circumference = (2 * pi * radius);
    console.log("The Circumference of circle is: ", circumference);
}
// areaOfCircle();
// circumferenceOfCircle();
