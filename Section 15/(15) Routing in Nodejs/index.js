const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        res.end("This is your Home page");
    } else if(req.url == "/about") {
        res.end("This is your About page");
    }
    else if(req.url == "/contact") {
        res.end("This is your contact page");
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"});
        res.end("<h1> Error 404 page not found </h1>");
    }
    
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening on port 8000");
})