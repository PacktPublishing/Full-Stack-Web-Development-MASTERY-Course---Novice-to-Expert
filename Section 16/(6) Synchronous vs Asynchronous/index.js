const fs = require("fs");

// const data = fs.readFileSync("readme.txt","UTF-8");
// console.log(data);
// console.log("Mission accomplished, good work");


fs.readFile("readme.txt", "utf-8", (err,data) => {
    console.log(data);
});

console.log("Mission accomplished, good work");