const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// relativePath ../ /about
// AbsoultePath \

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Server is listening to port 8000");
});