let btn = document.getElementById("btn");

// click
btn.addEventListener('click', firstFunction);

function firstFunction(e){
    console.log("You clicked submit button",e);
    e.preventDefault();
}

// dblclick

btn.addEventListener('dblclick', secondFunction);

function secondFunction(e){
    console.log("This is double click");
    e.preventDefault();
}

// mousemove
// btn.addEventListener('mousemove', thirdFunction);

// mouseover
// btn.addEventListener('mouseover', thirdFunction);

// mouseout
// btn.addEventListener('mouseout', thirdFunction);

// mouseenter
// btn.addEventListener('mouseenter', thirdFunction);

// mouseup
// btn.addEventListener('mouseup', thirdFunction);

// mousedown
btn.addEventListener('mousedown', thirdFunction);

function thirdFunction(e){
    console.log("It is mousedown",e);
    e.preventDefault();
}