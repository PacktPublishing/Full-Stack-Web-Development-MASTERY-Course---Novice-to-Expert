const mySymbol = Symbol();

const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2);

console.log(Symbol());
console.log(Symbol('Some Test'));

let student = {name: 'Brad'};
let id_CompanyA = Symbol("id");
student[id_CompanyA] = "id assigned by company A";
let id_CompanyB = Symbol("id");
student[id_CompanyB] = "id assigned by company B";
console.log(student);
