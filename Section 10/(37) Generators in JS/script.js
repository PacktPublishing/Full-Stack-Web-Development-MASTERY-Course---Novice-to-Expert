// Basic syntax to create a generator function
// function* name(params) {
//     yield 1;
//     yield 2;
// }

function* generator(){
    yield 1;
    yield 2;
}

let iterator = generator();
let result;

do {
    result = iterator.next();
    console.log(result);
} while (!result.done);