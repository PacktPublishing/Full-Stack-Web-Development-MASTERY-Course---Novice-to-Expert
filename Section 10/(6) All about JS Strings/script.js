console.log("All about Strings in JavaScript");

let variable1 = "Web development";
let variable2 = "course";
// console.log(variable1+" "+variable2);

// let variable3 = variable1.concat(" ", variable2);
// console.log(variable3);

// variable1 = variable1.concat(' ', variable2);
// console.log(variable1);

let html = `<h1> Heading1 </h1> <p> Paragraph </p>`;
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[3]);
console.log(html.indexOf('H'));
console.log(html.charAt(6));
console.log(html.endsWith('nejwj'));
console.log(html.includes('nejwj'));
console.log(html.substring(1, 6));
console.log(html.slice(0, 10));
console.log(html.split('>'));
console.log(html.replace('Heading', 'Course'));

let item1 = 'Mac';
let item2 = 'ios';

let html2 = `<h1> Hi I use ${item1} and my friend uses ${item2} </h1> <h3> I love web development </h3>`;
console.log(html2);

document.body.innerHTML = html2;