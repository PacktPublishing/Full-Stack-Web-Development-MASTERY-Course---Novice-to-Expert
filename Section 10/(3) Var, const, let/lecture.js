console.log("Hello World");

// var const let are the 3 keywords to declare variables in JavaScript


var language = "JavaScript";
var course = "full stack web development";
var ratings = 5;

// console.log(course);
// console.log(ratings);

language = "C++";
console.log(language, course, ratings);

// Rules to write variable names
/*
    1. You cannot start your variable name with number
    2. You can start your variable name with underscore (_), letters, $
    3. Variable names are case sensitive
*/

// Most widely used programming variable case types
/*
    1. camelCase
    2. kebab-case
    3. snake_case
    4. PascalCase
*/

const marks = 97;
// marks = 100; /* You cannot redeclare const variables */
console.log(marks);

// 'Var' is global level syntax you can redeclare and call it globally
var city = "Berlin";


{
    // 'let' is block level syntax it has no relation with global elements
    let city = "Sydney";
    console.log(city);
}

console.log(city);


const arr = [10,20,40,50];
// arr = [10,20,40,50,30];
arr.push(30);
console.log(arr);
