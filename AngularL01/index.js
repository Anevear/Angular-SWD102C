"use strict";
var somethingFun = 'Riding my bike is fun!';
console.log(somethingFun);
//ex 1
var sandwich = 'BLT';
var orderNumber = 1476;
var delicious = true;
// ex 2
function orderFood(sandwich, orderNumber) {
    console.log('Your order number is ' + orderNumber + ' and contains a ' + sandwich + ' sandwich.');
}
orderFood('Turkey, Bacon, Guac', 36);
//ex 3
var age = 33;
var ageAsString = age.toString();
var greeting = " Hello, my age is " + ageAsString + ".";
console.log(greeting);
//ex 4
var age2 = "66";
var ageAsNumber = parseInt(age2);
var numCalc = ageAsNumber * 10;
console.log(numCalc);
