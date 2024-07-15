console.log("conditionals and Switch case");



// Different operators
// a==b a is equal to b
// a > b  a is greater than b
// a < b  a is less than b
// a >= b a is greater than or equal to b
// a <= b a is greater than or equal to b
// a===b a has some value and same type as b

// If statement
if (5>0) {
    console.log("5 is greater than 0");
}
if (5<0) {
    console.log("5 is lesser than 0");
}

// If else statement
let age = 15;
// if (age>18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are not an adult");
// }

// Ternary operator to use if else
console.log(age==19? 'You are 19':'You are not 19');

// else if statement
let salary = 500;
if (salary > 1000) {
    console.log("Your salary is greater than 1000");
} else if (salary < 1000) {
    console.log("Your salary is lesser than 1000")
}

// Switch case
switch (age) {
    case 18:
        console.log("You are an adult");
        break;

    case 15:
        console.log("You are in teenage");
        break;

    case 70:
        console.log("You are senior citizen");
        break;
        
    default:
        console.log("You are unknown age");
        break;
}