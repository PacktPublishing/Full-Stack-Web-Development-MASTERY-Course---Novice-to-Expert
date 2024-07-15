// createElement()
var elem = document.createElement("a");
elem.className = "jsClass";
elem.id = "jsID";
elem.setAttribute("href", "//google.com");
// elem.innerText = "<b>DO NOT CLICK HERE</b>";
elem.innerHTML = "<b>DO NOT CLICK HERE</b>";
let div = document.querySelector('div.container');
div.appendChild(elem);
console.log(elem);

// getAttribute()
// var h = document.getElementById("myAnchor").getAttribute("href");
// console.log(h);

// hasAttribute()
// var h = document.getElementById("myAnchor").hasAttribute("href");
// console.log(h);

// removeAttribute()
// var h = document.getElementById("myAnchor").removeAttribute("href");

// replaceWith()
let element1 = document.getElementById("myId1");
let element2 = document.createElement("div");

let content = document.createTextNode("Content Added using only JavaScript");
element2.appendChild(content);
element1.replaceWith(element2);

// removeChild()
let list = document.getElementById("myUl");

if(list.hasChildNodes()){
    list.removeChild(list.childNodes[1]);
}