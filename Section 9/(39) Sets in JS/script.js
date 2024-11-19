// Basic syntax to create a Set
const mySet = new Set();
console.log("This set looks like: ", mySet);

// To add some elements in your set you can make use of add()
mySet.add("John");
mySet.add("Sam");
mySet.add("Jack");
console.log(mySet);

// To store array in your set
let mySet2 = new Set([1, 45, 'JavaScript', false, {a: 4, b: 8}]);
console.log(mySet2);

// To return the size of the set you can use size property
console.log(mySet2.size);

// To check if my element is present in the set then use has() which returns a boolean value
console.log(mySet2.has('Java'));

// To remove a particular element from the set you can use delete()
console.log(mySet2.delete('JavaScript'));
console.log(mySet2);

// To iterate a set
for(let item of mySet2){
    console.log(item);
}