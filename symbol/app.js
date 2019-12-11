//create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

//console.log(sym1);
//console.log(typeof sym1);
//console.log(Symbol() === Symbol()); //false
//console.log(`Hello ${String(sym1)}`);

//unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};


// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

//symbols are not enumerable in for..in
// for (let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }

//symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
