console.log("Loops in JavaScript");

// for
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i==90) {
        break;
    }
}

// forin
var person = {name: 'Sam', language: 'JavaScript', age: 19};

for (var i in person) {
    console.log(i + "=" + person[i]);
}

// foreach
const arr = [2,3,5];
let sum = 0;
arr.forEach(element => {
    // sum += element;
    sum = sum + element;
    console.log(sum);
});

// while
let x = 1, n = 100;
while (x<=n) {
    console.log(x);
    // x += 1;
    x++;
}

// Do while
let a = 1 , m=100;
do {
    console.log(a);
    a++;
} while (a<=m);

