//An ice cream vendor sells his ice creams in cone(radius r and height h) and square(side r) shaped containers. However, 
//he is unsure of the quantity that can be filled in two containers.

import *as promptSync from 'prompt-sync';
const prompt = promptSync();


let r:number = parseInt(prompt("Enter the radius: "));
let h:number = parseInt(prompt("Enter the height of the cone: "));
// let side:number = parseInt(prompt("Enter the side of the square: "));

let shape:string = prompt("Enter the shape of the container: ");

switch(shape){
    case 'cone':
        console.log("Serving Ice-cream in cone: ");
        coneVolume(r, h);
        break;
    case 'square':
        console.log("Serving Ice-cream in square: ");
        squareVolume(r);
        break;
    default:
        console.log("Please enter a valid shape");
}

function coneVolume(r:number, h:number){
    console.log("The volume of coned shape Ice-cream is: ", 0.33 * 3.14 * r * r *h); 
}

function squareVolume(r:number){
    console.log("The volume of square shape Ice-cream is: ", r * r * r); 
}