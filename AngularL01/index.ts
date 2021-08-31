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