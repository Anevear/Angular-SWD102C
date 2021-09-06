//ex 1
class Rectangle {
         height: number;
         width: number;
         constructor(height: number, width: number) {
                  this.height = height;
                  this.width = width;
         
         }
         perimeter() {
                  return (this.height*2) + (this.width*2);
         }
}
const myYard = new Rectangle(24, 32);
console.log(myYard.perimeter());

//ex 2
interface Person {
         name: string;
}
interface Flyable {
         flyHeight: number;
}
interface Powers extends Person, Flyable {
         powers: string[];
}
class SuperHero implements Powers {
         name: string;
         flyHeight: number;
         powers: string[];

         constructor(firstName: string, flyingHeight: number, powersList: string[]){
                  this.name = firstName;
                  this.flyHeight = flyingHeight;
                  this.powers = powersList;
         }
}
const frozone = new SuperHero('Frozone', 10000, ['Freeze water from any source of moisture', 'Ice skate on his frozen water'])
console.log(frozone)

//ex 3
interface Shape {
         sides: number;
}
interface Triangle extends Shape {
         angles: number[];
}
class Equilateral implements Triangle {
         sides: number;
         angles: number[];

         constructor(numOfSides:number, anglesNum: number[]){
                  this.sides = numOfSides;
                  this.angles=anglesNum;
         }
}
const triangle= new Equilateral(3, [60,60,60])
console.log(triangle)

//ex 4
interface Shape2 {
         sides: number;
}
interface Triangle2 extends Shape2{
         angles: number[];
}
let equilateral2=<Triangle2>{};
equilateral2.sides=3;
equilateral2.angles=[60,60,60];

console.log(equilateral2);

//ex 5
class Square extends Rectangle {
         area(){
                  return this.height*this.width;
         }
}
const newSquare= new Square(3,5);
const area= newSquare.area();
const perimeter= newSquare.perimeter();

console.log("Area: "+area+" Perimeter: "+perimeter);

//ex 6
function indentifyType<T>(argument:T): string {
         let argType: string = '';

         switch(typeof argument){
                  case 'number':
                           argType='number';
                           break;
                  case 'string':
                           argType='string';
                           break;
                  default:
                           argType='neither a number nor a string';
         }

         return 'You passed in a '+argType+', whose values is '+argument;
}
console.log(indentifyType("Adolin! Shallan is looking for you!"));

//ex 7
function methodDecorator(target:Object, propertyKey:string, descriptor:PropertyDescriptor):any {
         let oldValue=descriptor.value; //this is where the original class methid is stored

         descriptor.value=function(){ //redefinition of the class method
                  console.log(`Calling ${propertyKey} with `, target); //logging when the class method is called to the console.

                  let value=oldValue.apply(null,[arguments[1],arguments[0]]); // calls the original class methid passsing in the caller's 2 arguments (args)

                  console.log(`Function is executed`); //logs that the function was executed
                  return value +'; Decorators are crazy!'; // returns the result w/ some additional text
         };
         return descriptor;
}

class MyClass{
         @methodDecorator //decorator expression
         exampleFunction(arg1:string, arg2:string){
                  console.log(`Arguments Received: ${arg1} and ${arg2}`); //logs the args and returns their concatenation
                  return `${arg1} ${arg2}`; // note that in this ex 7 ` needs to be used and not '
         }
}
const run = new MyClass(); //instantinates the class
console.log(run.exampleFunction('Windrunner','Kaladin'));

//ex 8
function InspectClass(target:any){ //this is the CLASS decorator. Only 1 param needed, the target
         console.log(`Class in use: ${target.name}`);
}
function InspectProperty(target:any, propertyKey:string): void{ //this is the PROPERTY decorator. TWO params are needed, target AND a propertyKey
         let val=target[propertyKey];

         let getter=function(){ //a see below
                  console.log(`Get: ${propertyKey}=>${val}`);
                  return val;
         }
         let setter=function(newValue: any){ //b see below
                  console.log(`Set: ${propertyKey}=>${newValue}`);
                  val=newValue;
         }; //both a&b are 2 funcs def & ea of which produces an output and perf the ops def to return and set vals. when this partic decorator is applied to the class property these new implementations will replace the default getter and setter

         if(delete target[propertyKey]){
                  Object.defineProperty(target,propertyKey,{
                           get:getter,
                           set:setter
                  })
         }
         //this 'if' part of the ccode goes in and del the OG prop in the class w/ delete target[propertyKey]. then it re-adds the prop w/ the new getter and setter (in the abv b4 the 'if')
}

@InspectClass //finally the inspect class decorator will be applied to the following Automobile class
class Automobile{
         @InspectProperty
         public make:string;//this is the only decorated property: anytime this is set to a new val the setter and getter will run
         public model:string;
         public year:number;

         constructor(make:string, model:string, year:number){
                  this.make=make;
                  this.model=model;
                  this.year=year;
         }

         getInfo():string{ // this ethod returns a concatenated string containing the make, model, and year
                  return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`
         }
}

let mazda=new Automobile("Mazda", "RX-7", 1988);
console.log(mazda.getInfo());