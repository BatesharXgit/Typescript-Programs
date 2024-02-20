"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var string = prompt("Enter string: ");
var str = prompt("Enter string: ");
var count = 0;
function countOccurrence() {
    for (var i = 0; i < string.length; i++) {
        if (string[i] == str) {
            count += 1;
        }
    }
    console.log(count);
}
countOccurrence();
