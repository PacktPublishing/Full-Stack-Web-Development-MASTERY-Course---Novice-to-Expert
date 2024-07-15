const fs = require("fs");

// fs.writeFile("readme.txt","Hello world",(err) => {
//     console.log("Mission accomplished");
// });

// fs.appendFile("readme.txt"," Node.js is very easy to learn", (err) =>{
//     console.log("Data has been appended");
// })

fs.readFile("readme.txt","UTF-8", (err,data) => {
    console.log(err);
    console.log(data);
})