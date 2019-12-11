//destructuring assigment

let a, b;
[a, b] = [100, 200];
//rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

//console.log(rest);
({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(a, b);
console.log(rest);

//array destructuring
// const peolple = ['John', 'Beth', 'Mike'];
//
// const [person1, person2, person3] = peolple;
//
// console.log(person1, person2, person3);

//parse array returned from function
// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// }
//
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
//
// console.log(person1, person2, person3);

//object destructuring

const person = {
    name: 'John Doe',
    age: 32,
    city: "Miami",
    gender: 'Male',
    sayHello: function () {
        console.log('Hello');
    }
};
//old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

//mew ES6 destructuring
const {name, age, city, sayHello} = person;

console.log(name, age, city);

sayHello();
