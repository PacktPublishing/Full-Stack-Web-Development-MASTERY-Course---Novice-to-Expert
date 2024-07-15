let regex = /JavaScript/;

regex = /^Java/; // means expression will match if string starts with...
regex = /website$/; // $ at the end of the string means that string ends with...
regex = /J.vaScript/ // match any 1 character
regex = /J*vaScript/ // match any 0 or more character
regex = /J?vaScr?p?/ // ? after character means that this character is optional

let txt = "JavaScript is the brain of a website";

let output = regex.exec(txt);
console.log("The output is: ", output);

if (regex.test(txt)) {
    console.log(`String ${txt} matches expression ${regex.source}`);
} else {
    console.log(`String ${txt} doesn't match expression ${regex.source}`);
}