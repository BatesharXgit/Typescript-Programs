"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.computeArea = function (radius) {
        this.area = 22 / 7 * radius * radius;
        console.log("The area of Circle is: ", this.area);
        return this.area;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.computeArea = function (length, breadth) {
        this.area = length * breadth;
        console.log("The area of Circle is: ", this.area);
        return this.area;
    };
    return Rectangle;
}());
var circle = new Circle();
var r = parseInt(prompt("Enter the radius of circle: "));
circle.computeArea(r);
var rectangle = new Rectangle();
var l = parseInt(prompt("Enter the length of rectangle: "));
var b = parseInt(prompt("Enter the breadth of rectangle: "));
rectangle.computeArea(l, b);
