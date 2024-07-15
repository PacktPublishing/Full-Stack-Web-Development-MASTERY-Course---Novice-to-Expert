const fs = require("fs");
const bioData = {
    name : "Sammy",
    age : 24,
    skill : "Node.js"
};

// console.log(bioData);

const jsonData = JSON.stringify(bioData);
fs.writeFile("testjson.json", jsonData, (err) => {
    console.log("Process completed");
})
// console.log(jsonData.name);


fs.readFile("testjson.json", "utf-8", (err,data)=>{
    // This will show the result in JSON
    // console.log(data);

    // This will show the result in JS obj
    const objData = JSON.parse(jsonData);
    console.log(objData);
})
// console.log(objData.skill);