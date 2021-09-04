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
//ex 1
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.height * 2) + (this.width * 2);
    };
    return Rectangle;
}());
var myYard = new Rectangle(24, 32);
console.log(myYard.perimeter());
var SuperHero = /** @class */ (function () {
    function SuperHero(firstName, flyingHeight, powersList) {
        this.name = firstName;
        this.flyHeight = flyingHeight;
        this.powers = powersList;
    }
    return SuperHero;
}());
var frozone = new SuperHero('Frozone', 10000, ['Freeze water from any source of moisture', 'Ice skate on his frozen water']);
console.log(frozone);
var Equilateral = /** @class */ (function () {
    function Equilateral(numOfSides, anglesNum) {
        this.sides = numOfSides;
        this.angles = anglesNum;
    }
    return Equilateral;
}());
var triangle = new Equilateral(3, [60, 60, 60]);
console.log(triangle);
var equilateral2 = {};
equilateral2.sides = 3;
equilateral2.angles = [60, 60, 60];
console.log(equilateral2);
//ex 5
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.area = function () {
        return this.height * this.width;
    };
    return Square;
}(Rectangle));
var newSquare = new Square(3, 5);
var area = newSquare.area();
var perimeter = newSquare.perimeter();
console.log("Area: " + area + " Perimeter: " + perimeter);
