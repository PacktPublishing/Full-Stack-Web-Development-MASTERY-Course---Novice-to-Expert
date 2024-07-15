console.log("Functions in JavaScript");

// 1. Function Declaration
function display_message(msg) {
    console.log(msg);
}

display_message("Hello world");
display_message("JavaScript is the brain of a web page");

// 2. Function Expression
let add = function(a,b) {
    return a+b;
}

console.log(add(4,3));

function distance(speed, time) {
    let dist = speed*time;
    console.log(dist);
}

distance(10,5);