// Syntax to create a Map
const exampleMap = new Map()
console.log(exampleMap);

// To insert elements in a map we use the set()
let map1 = new Map();
map1.set('info', {name: 'Jack', age: 30});
map1.set('bio', {name: 'Sam', age: 20});
map1.set('key', {name: 'Brad', age: 14});
console.log(map1);

// You can also use objects or functions as keys
let map2 = new Map();
let obj = {};
map2.set(obj, {name: 'John', age: 40});
console.log(map2);

// You can also access the map elements using the get()
console.log(map1.get('info'));

// You can use the has() to check if element is in map
console.log(map1.has('info'));

// You can use the clear() and delete() to remove elements from a map
map1.delete('address');
console.log(map1);

// map1.delete('info');
// console.log(map1);


// map1.clear();
// console.log(map1);

// With the help of size property you can get the number of elements present in your map
console.log(map1.size);

// You can also iterate through a map element using forOf or forEach loop
for(let [key, value] of map1){
    console.log(key + '-' + value);
}

// You can iterate over a map and get a key using keys()
map1.set('name', 'Tom');
map1.set('age', 60);

// loop through the map
for(let key of map1.keys()){
    console.log(key);
}

// You can iterate over a map and get a value using values()
for(let values of map1.values()){
    console.log(values);
}

// You can iterate over a map and get a key / value using entries()
for(let elem of map1.entries()){
    console.log(`${elem[0]}: ${elem[1]}`);
}