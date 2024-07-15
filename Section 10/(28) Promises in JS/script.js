function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            const error = false;
            if(!error){
                console.log("Promise operation is successful");
                resolve();
            }
            else{
                console.log("Promise operation was unsuccessful");
                reject("Mission failed");
            }
        }, 2000);
    })
}

fun1().then(function(){
    console.log("Thanks");
}).catch(function(error){
    console.log("No thanks " + error);
})