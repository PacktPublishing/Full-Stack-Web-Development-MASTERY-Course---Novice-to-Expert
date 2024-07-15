const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// relativePath ../ /about
// AbsoultePath \

const staticPath = path.join(__dirname, "../public");

// To set the view engine
app.set('view engine', 'hbs');

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index', {
        dynamic: "handlebars",
    });
});

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Server is listening to port 8000");
});