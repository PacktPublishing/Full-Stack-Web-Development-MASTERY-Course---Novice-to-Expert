console.log("Callback functions tutorial");

// function fun1(){
//     console.log("Function1 is executing");
// }

// function fun2(){
//     console.log("Function2 is executing");
// }

// fun1();
// fun2();

function msg(str){
    setTimeout(function() {
        console.log("This how callback works");
    }, 5000);
}

msg();