"use strict";
{
    // Function 
    // 1. Normal function 
    // 2. Arrow function 
    // 1. 
    function add(a, b) {
        return a + b;
    }
    console.log(add(1, 10));
    // 2. 
    const addArrow = (a, b) => a + b;
    console.log(addArrow(23, 45));
    const poorUser = {
        name: 'Jahid',
        balance: 0,
        addBalance(balance) {
            return `My balance is ${this.balance + balance}`;
        }
    };
    const arr = [2, 3, 4, 5,];
    const arraySquare = arr.map((e) => e * e);
}
