document.getElementById("containerId").addEventListener("click", function(e){
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = e.target.classList;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    // console.log("You have clicked h1 tag!");
})