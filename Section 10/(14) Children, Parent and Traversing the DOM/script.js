let x = document.querySelector('.container');
console.log(x.childNodes);
// console.log(x.children);

let nodeName = x.childNodes[1].nodeType;
console.log(nodeName);

// Node Types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. Document
// 10. Doctype

let container = document.querySelector('div.container');
// console.log(container.children[0].children[0].children);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);
// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);