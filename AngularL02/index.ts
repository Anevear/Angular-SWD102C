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