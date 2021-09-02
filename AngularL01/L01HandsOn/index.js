"use strict";
var ContactCard = /** @class */ (function () {
    function ContactCard(firstName, phoneNum) {
        this.firstName = firstName;
        this.phoneNum = phoneNum;
    }
    ContactCard.prototype.sendMessage = function () {
        console.log("Hello, my name is " + this.firstName + " and my phone number is: " + this.phoneNum + ".");
    };
    return ContactCard;
}());
var newCard = new ContactCard("Henry", 1234567890);
newCard.sendMessage();
