// 1. single element selector

// getElementById()
// let x = document.getElementById("demo");
// x.style.color = "green";

// x.innerText = "<b>Heading 1</b>";
// x.innerHTML = "<b>Heading 1</b>";

// // x = x.className;
// // console.log(x);

// let a = document.getElementById("test");
// a = a.childNodes;
// console.log(a);

// querySelector()
// let x = document.querySelector('#demo');
// let x = document.querySelector('.heading1');
// let x = document.querySelector('h1');
// x.style.color = "yellow";

// 2. Multi element Selector

// querySelectorAll()
let b = document.querySelectorAll("div");
console.log(b);

// getElementsByTagName()
let article = document.getElementsByTagName("article");
console.log(article);

for (let i = 0; i < article.length; i++) {
    article[i].style.border = "2px solid black";
    
}

// getElementsByClassName()
let n = document.getElementsByClassName("heading1");
console.log(n);