"use strict";
//there are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Count the number of ways, the person can reach the top.
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var stairs = parseInt(prompt("Enter the number of stairs: "));
var prevPrev = 1;
var prev = 1;
var current = 0;
for (var i = 2; i <= stairs; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
}
console.log("The number of ways is: " + prev);
