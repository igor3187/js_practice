// let regEx;
// regEx = /hello/;
// regEx = /hello/i; //i = case in insensitive
//regEx = /hello/g; //global search

// console.log(regEx);
// console.log(regEx.source);

// exec() - return result in array or null
// const  result = regEx.exec('hello World');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test() - returns true or false

//match() - return result array or null
// const str = 'Hello there';
// const result = str.match(regEx);
// console.log(result);

//search() - returns index of the first match if not found -1
// const str = 'Brad Hello There';
// const result = str.search(regEx);
// console.log(result);

//replace() - return a new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace('Hello', 'hi');
console.log(newStr);
