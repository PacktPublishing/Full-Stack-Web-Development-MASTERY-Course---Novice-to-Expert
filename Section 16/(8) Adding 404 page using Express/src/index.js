const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;

// relativePath ../ /about
// AbsoultePath \

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

// To set the view engine
app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index', {
        dynamic: "handlebars",
    });
});


app.get("/about", (req, res)=>{
    res.render("about");
});


app.get("/about/*", (req,res) => {
    res.render('404', {
        errorcomment: "In about this page not found (404 ERROR)",
    });
});

app.get("*", (req, res) => {
    res.render('404',{
        errorcomment: "Error 404. Page Not Found",
    });
});


app.listen(port, () => {
    console.log("Server is listening to port 8000");
});