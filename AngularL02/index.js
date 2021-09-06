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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//ex 6
function indentifyType(argument) {
    var argType = '';
    switch (typeof argument) {
        case 'number':
            argType = 'number';
            break;
        case 'string':
            argType = 'string';
            break;
        default:
            argType = 'neither a number nor a string';
    }
    return 'You passed in a ' + argType + ', whose values is ' + argument;
}
console.log(indentifyType("Adolin! Shallan is looking for you!"));
//ex 7
function methodDecorator(target, propertyKey, descriptor) {
    var oldValue = descriptor.value; //this is where the original class methid is stored
    descriptor.value = function () {
        console.log("Calling " + propertyKey + " with ", target); //logging when the class method is called to the console.
        var value = oldValue.apply(null, [arguments[1], arguments[0]]); // calls the original class methid passsing in the caller's 2 arguments (args)
        console.log("Function is executed"); //logs that the function was executed
        return value + '; Decorators are crazy!'; // returns the result w/ some additional text
    };
    return descriptor;
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.exampleFunction = function (arg1, arg2) {
        console.log("Arguments Received: " + arg1 + " and " + arg2); //logs the args and returns their concatenation
        return arg1 + " " + arg2; // note that in this ex 7 ` needs to be used and not '
    };
    __decorate([
        methodDecorator //decorator expression
    ], MyClass.prototype, "exampleFunction", null);
    return MyClass;
}());
var run = new MyClass(); //instantinates the class
console.log(run.exampleFunction('Windrunner', 'Kaladin'));
//ex 8
function InspectClass(target) {
    console.log("Class in use: " + target.name);
}
function InspectProperty(target, propertyKey) {
    var val = target[propertyKey];
    var getter = function () {
        console.log("Get: " + propertyKey + "=>" + val);
        return val;
    };
    var setter = function (newValue) {
        console.log("Set: " + propertyKey + "=>" + newValue);
        val = newValue;
    }; //both a&b are 2 funcs def & ea of which produces an output and perf the ops def to return and set vals. when this partic decorator is applied to the class property these new implementations will replace the default getter and setter
    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
    //this 'if' part of the ccode goes in and del the OG prop in the class w/ delete target[propertyKey]. then it re-adds the prop w/ the new getter and setter (in the abv b4 the 'if')
}
var Automobile = /** @class */ (function () {
    function Automobile(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Automobile.prototype.getInfo = function () {
        return "Make: " + this.make + " Model: " + this.model + " Year: " + this.year;
    };
    __decorate([
        InspectProperty
    ], Automobile.prototype, "make", void 0);
    Automobile = __decorate([
        InspectClass //finally the inspect class decorator will be applied to the following Automobile class
    ], Automobile);
    return Automobile;
}());
var mazda = new Automobile("Mazda", "RX-7", 1988);
console.log(mazda.getInfo());
