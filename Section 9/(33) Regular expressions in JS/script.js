// Syntax to create a regular expression

let regex = /JavaScript/;

// console.log(regex);
// console.log(regex.source);

// 1. exec() -> will return an array for match or null for no match
let txt = "JavaScript is the brain of a website";
let output1 = regex.exec(txt);
console.log(output1);
console.log(output1.input);
console.log(output1.index);

// 2. test() -> will only return true or false
let output2 = regex.test(txt);
console.log(output2);

// 3. match() ->  will return an array of results or null
let output3 = txt.match(regex);  // This is the correct syntax
// let output3 = regex.match(txt);   This is the wrong syntax
console.log(output3);


// 4. search() -> will return index of 1st match else -1
let output4 = txt.search(regex);  // This is the correct syntax
// let output4 = regex.search(txt);   This is the wrong syntax
console.log(output4);

// 5. replace() -> return new replaced string with all replacements (if no flag is give, first match will be replaced)
let output5 = txt.replace(regex, 'Python'); // This the correct syntax
// let output5 = regex.replace(txt, 'Python');   This is the wrong syntax
console.log(output5);