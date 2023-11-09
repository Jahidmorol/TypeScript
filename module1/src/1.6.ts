{


// Function 
// 1. Normal function 
// 2. Arrow function 

// 1. 
function add(a: number, b: number): number {
    return a + b; 
}
console.log(add(1, 10));

// 2. 
const addArrow = (a: number, b: number): number => a + b;
console.log(addArrow(23, 45));

const poorUser = {
    name: 'Jahid',
    balance: 0,
    addBalance(balance: number): string {
        return `My balance is ${this.balance + balance}`;
    }
}

const arr: number[] = [2, 3, 4, 5,];
const arraySquare: number[] = arr.map((e: number): number => e * e );





}