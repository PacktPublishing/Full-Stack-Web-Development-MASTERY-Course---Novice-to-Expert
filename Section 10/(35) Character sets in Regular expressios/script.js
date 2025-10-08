let regex = /JavaScript/;

// [] using this we can get any character from a specified range
regex = /J[a-z]vaScript/;
regex = /J[abz]vaScript/; // character can only be a, b or z
regex = /J[^abz]vaScript/; // character cannot be a, b or z
regex = /J[^abz]vaScri[pbx]t/; // character at start cannot be a, b or z but at the end charcter it can be p, b or x
regex = /J[a-zA-Z]vaScri[0-9]t/; // we can have multiple character sets

regex = /JavaScript{10,5}/


let txt = "JavaScript is the brain of a website";

let output = regex.exec(txt);
console.log("The output is: ", output);

if (regex.test(txt)) {
    console.log(`String ${txt} matches expression ${regex.source}`);
} else {
    console.log(`String ${txt} doesn't match expression ${regex.source}`);
}