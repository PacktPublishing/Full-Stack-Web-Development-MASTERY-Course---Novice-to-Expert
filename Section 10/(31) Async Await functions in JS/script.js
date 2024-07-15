// Basic syntax to write async functions

// async function name(params){
//     // statements
// }

// Examples of async function

// async function fun1(){
//     console.log("Async / Await tutorial");
//     return Promise.resolve(1);
// }

// fun1().then(function(res){
//     console.log(res);
// });

// Basic syntax to write Await keyword

// let result = await Promise;

// Example of await

async function fun2(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("Done with Async / Await function") , 1000);
    })
    let result = await promise;
    console.log(result);
}

fun2();