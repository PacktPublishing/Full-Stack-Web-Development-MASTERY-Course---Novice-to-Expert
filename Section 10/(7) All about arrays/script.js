console.log("All about arrays and objects");

// 2 syntax to create Array
// let arr = [1,2,3,4,5,'John'];
let arr1 = new Array(1,2,3,4,5,'John');
console.log(arr1);

let arr2 = ['1st elem','2nd elem','3rd elem'];
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[arr2.length-1]);

// indexOf()
// let students = ['John', 'Jack', 'Sam', 'Tom'];
// let a = students.indexOf('Jack');
// console.log(a);

// sort()
let age1 = [65, 56, 78, 87,19];
// age1.sort();
// console.log(age1);

// reverse()
// age1.reverse();
// console.log(age1);

// concat()
let alphabets = ['a','b','c'];
let numeric = [1,2,3];
let alphanumeric = alphabets.concat(numeric);
console.log(alphanumeric);

// push()
let city = ['Munich', 'New York', 'Cape Town'];
// city.push('London');
// console.log(city);


// pop()
// city.pop();
// console.log(city);

// shift()
// city.shift();
// console.log(city);

// unshift()
// city.unshift('London');
// console.log(city);


// Objects in JavaScript
// 2 Syntax to create an object
let user = new Object();
user.name = 'Jack';
user.age = 19;
user.language = 'JavaScript';
// let user = {
//     name: 'Jack',
//     age: 19,
//     language: 'JavaScript'
// }
console.log(user);