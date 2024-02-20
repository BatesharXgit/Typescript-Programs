import *as promptSync from "prompt-sync";
const prompt = promptSync();

interface Area {
    area:number;

    computeArea(radius:number, length:number, breadth:number):number;
}

class Circle implements Area {
    area:number;

    computeArea(radius: number) {
        this.area = 22/7 * radius * radius;  
        console.log("The area of Circle is: ",this.area); 
        return this.area;  
    }
}

class Rectangle implements Area {
    length:number;
    breadth:number;
    area:number;

    computeArea(length: number, breadth:number) {
        this.area = length * breadth;  
        console.log("The area of Rectangle is: ",this.area); 
        return this.area;  
    }
}
let circle = new Circle();
let r = parseInt(prompt("Enter the radius of circle: "));
circle.computeArea(r);

let rectangle = new Rectangle();
let l = parseInt(prompt("Enter the length of rectangle: "));
let b = parseInt(prompt("Enter the breadth of rectangle: "));   
rectangle.computeArea(l,b);