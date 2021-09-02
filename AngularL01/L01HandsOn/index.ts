interface Person {
         firstName: string;
         lastName?: string;
}
interface Contact {
         phoneNum: number;
         email?: string;
}

class ContactCard implements Person, Contact {
         firstName: string;
         phoneNum: number;

         constructor(firstName: string, phoneNum: number){
                  this.firstName = firstName;
                  this.phoneNum = phoneNum;
         }
         sendMessage(): void {
                  console.log("Hello, my name is " + this.firstName + " and my phone number is: " + this.phoneNum + ".");
         }
}

let newCard = new ContactCard("Henry", 1234567890);
newCard.sendMessage();