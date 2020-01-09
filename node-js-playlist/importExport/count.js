// module.exports.counter = function (arr) {
//     return 'There are ' + arr.length + ' elements in this array';
// };
//
// module.exports.adder = function(a,b) {
//   return `The sum of 2 numbers is ${a+b}`;
// };

//module.exports.pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

let counter = function (arr) {
     return 'There are ' + arr.length + ' elements in this array';
};

let adder = function(a,b) {
   return `The sum of 2 numbers is ${a+b}`;
};

let pi = 3.14;

module.exports = {
    counter,
    adder,
    pi
};
