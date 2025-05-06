"use strict";
{
    function addNumber(num1, num2) {
        return num1 + num2;
    }
    ;
    console.log(addNumber(1, 2));
    let object = {
        income: 2000,
        expanse: 1000,
        doCalculation(take) {
            return this.expanse + this.expanse - take;
        }
    };
}
