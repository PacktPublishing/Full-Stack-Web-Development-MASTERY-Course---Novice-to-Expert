let key = "firstEntry";
let a = "Best course"
localStorage.setItem(key, 'value');
localStorage.setItem(a, 'Web development');

let myItem = localStorage.getItem(a);
// console.log(myItem);

localStorage.setItem(key, 'New value');

localStorage.removeItem(key);

localStorage.clear();

let myObj = {name: 'Sam', language: 'JavaScript'};
localStorage.setItem(key, JSON.stringify(myObj));

let item = JSON.parse(localStorage.getItem(key));
console.log(item);