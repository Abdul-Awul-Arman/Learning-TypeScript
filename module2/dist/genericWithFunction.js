"use strict";
const genericFunction = (param) => {
    return [param];
};
const result = genericFunction("Bangladesh");
const resultObj = genericFunction({
    name: 'arman',
    roll: 1,
    age: 22,
    class: "arabic"
});
const genericTuple = (param1, param2) => {
    return [param1, param2];
};
console.log(genericTuple("BD", 2));
