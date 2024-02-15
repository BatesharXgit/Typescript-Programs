"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.m1 = function () {
        console.log("Parent's private m1 function called");
    };
    Parent.prototype.m2 = function (a) {
        console.log("Parent's private m2 function called with argument ".concat(a));
    };
    Parent.prototype.m1Public = function () {
        console.log("Parent's public m1Public function called");
        this.m1();
    };
    Parent.prototype.m2Public = function (a) {
        console.log("Parent's public m2Public function called with argument ".concat(a));
        this.m2(a);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.m1Child = function () {
        console.log("Child's m1Child function called");
        this.m1Public();
    };
    Child.prototype.m2Child = function (b) {
        console.log("Child's m2Child function called with argument ".concat(b));
        this.m2Public(b);
    };
    return Child;
}(Parent));
var parent = new Parent();
var child = new Child();
parent.m1Public();
parent.m2Public(5);
child.m1Child();
child.m2Child(10);
