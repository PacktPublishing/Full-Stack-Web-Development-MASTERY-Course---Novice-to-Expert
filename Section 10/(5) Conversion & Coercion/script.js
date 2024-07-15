console.log("This lecture is for type conversion and coercion");

// Type conversion
let variable1 = 100;
variable1 = String(120);
console.log(variable1, (typeof variable1));

let variable2;
variable2 = String(true);
console.log(variable2, (typeof variable2));

let variable3;
variable3 = String(new Date());
console.log(variable3, (typeof variable3));

let arr;
arr = String([10,20,30,40,50]);
console.log(arr, (typeof arr));

// let x = parseInt("842.5353");
let x = parseFloat("842.5353");
console.log(x.toFixed(2), (typeof x));

// Type coercion
// let a = "9";
// let b = 10;
let a = 9;
let b = 10;
console.log(a+b);