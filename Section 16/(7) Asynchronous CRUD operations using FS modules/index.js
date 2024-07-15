// Asynchronous CRUD operations

const fs = require("fs");
// Challenge #1 -> Create a folder and name it "AsyncCRUD"
// fs.mkdir("AsyncCRUD",(err) => {
//     console.log(err);
// });

// Challenge #2 -> Create a file in that folder and name it "readme.txt" and some data
// fs.writeFile("AsyncCRUD/readme.txt","Random data",(err) => {
//     console.log(err);
// });

// Challenge #3 -> Add more data into the file at end of existing data
// fs.appendFile("AsyncCRUD/readme.txt",", data appended", (err) => {
//     console.log(err);
// });

// Challenge #4 -> Read the data without getting the buffer data at first
// fs.readFile("AsyncCRUD/readme.txt","utf-8",(err,data) => {
//     console.log(data);
// });

// Challenge #5 -> Rename the file to "info.txt"
// fs.rename("AsyncCRUD/readme.txt","AsyncCRUD/info.txt",(err)=>{
//     console.log(err);
// });

// Challenge #6 -> Delete the file
// fs.unlink("AsyncCRUD/info.txt",(err) => {
//     console.log(err);
// });

// Challenge #7 -> Delete the folder
fs.rmdir("AsyncCRUD",(err) => {
    console.log(err);
});