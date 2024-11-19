// Different kind of errors

// 1. Syntax error -> occurs when there is error in syntax

// 2. Runtime error -> occurs during execution of your program

// 3. Type error -> occurs when variable or parameter is of not valid type

// 4. Reference error -> occurs when there is an invalid reference

// 5. Eval error -> occurs when there is an error in global function

// 6. Range error -> occurs when a numeric variable or parameter is outside of its valid range


// Basic syntax of try catch

// try{
//     // some code that has an error
// }
// catch(error){
//     // this will run if code in try block faces any error
// }

// "Throw" "Finally"

let x = "Error handling in JS is very easy";
x = undefined;
if (x != undefined) {
    throw new Error('Random text');
} else {
    console.log("This is undefined");
}


try {
    // nkjewnkwenkwnkn
    fun();
} catch (error) {
    console.log("Are you sure that your code is Correct?");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

finally{
    console.log("Finally keyword will run this code nevertheless");
}