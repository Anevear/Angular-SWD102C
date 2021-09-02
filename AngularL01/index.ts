const somethingFun: string = 'Riding my bike is fun!';
console.log(somethingFun);


//ex 1
const sandwich: string = 'BLT';
const orderNumber: number = 1476;
const delicious: boolean = true;


// ex 2
function orderFood(sandwich: string, orderNumber: number): void {
         console.log('Your order number is ' + orderNumber + ' and contains a ' + sandwich + ' sandwich.');
}

orderFood('Turkey, Bacon, Guac', 36);

//ex 3
const age: number = 33;
const ageAsString: string = age.toString();

const greeting: string = " Hello, my age is " + ageAsString + ".";

console.log(greeting);

//ex 4
const age2: string = "66";
const ageAsNumber: number = parseInt(age2);

const numCalc: number = ageAsNumber * 10;

console.log(numCalc);

//ex 5
interface Person {
         age: number;
         name: string;
}
const fred = {} as Person;
fred.age = 57;
fred.name = "Fred Griffin";

//ex 6
interface ingredientsBasket {
         numberOfItems: number;
         ingredients: string[];
         calories: number;
}

function makeASandwich(ingredients: ingredientsBasket): void {
         console.log('Your sandwich includes ' + ingredients.numberOfItems + ' items of ' + ingredients.ingredients + ', which comes out to be a total of ' + ingredients.calories + ' calories.');
}
const sandwichIngredients = {
         numberOfItems: 3,
         ingredients: ['bacon', 'lettuce', 'tomato'],
         calories: 320
};

makeASandwich(sandwichIngredients);


//ex 7
interface Lifespan {
         currentTime: Date;
         printDate(): void;
}

class AppointmentDateFormatter implements Lifespan {
         currentTime: Date;

         //this constructor dsnt have return type annotation
         constructor(day: number, month: number, year: number) {
                  this.currentTime = new Date(year, month, day);
         }

         printDate(): void {
                  console.log(this.currentTime.toDateString());
         }
}

const dateOfAppointment = new AppointmentDateFormatter(12, 4, 2018);

dateOfAppointment.printDate();

//ex 8 

interface Animal {
         name: string;
         whoAmI(): void;
}
interface Mammal {
         brushHair(): void;
}
interface WingedAnimal {
         fly(): void;
}

class Bat implements Animal, Mammal, WingedAnimal {
         name: string;

         constructor(name: string) {
                  this.name = name
         }
         whoAmI(): void {
                  console.log("I'm " + this.name + "!");
         }
         brushHair(): void {
                  console.log("I must brush my hair to look pretty!");
         }
         fly(): void {
                  console.log("Look!! I can fly!")
         }
}

let bat = new Bat("Bartok");
bat.whoAmI();
bat.brushHair();
bat.fly();
