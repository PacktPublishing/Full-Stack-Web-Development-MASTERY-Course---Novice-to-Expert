var express = require("express");
var app = express();
// var ip = "127.0.0.1";
var port = 8000;

// app.get(route, callback)

app.get("/", (req, res) => {
    res.send("Hello World from Express!");
});

app.listen(port, ()=>{
    console.log("Running on port 8000");
});

// API function
// get - Read
// put - Update
// post - Create
// delete - Delete