// Synchronus programming

// function fun2(){
//     console.log("Fun2 is running");
// }

// function fun1(){
//     console.log("Fun1 is running");
//     fun2();
//     console.log("Fun1 has ended");
// }

// fun1();


// Asynchronus programming

function fun2(){
    setTimeout(function() {
        console.log("Fun2 is running");
    }, 5000);
}


function fun1(){
    console.log("Fun1 is running");
    fun2();
    console.log("Fun1 has ended");
}

fun1();
