const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const data = fs.readFileSync("testjson.json", "utf-8");
    const objData = JSON.parse(data);
    

    // console.log(req.url);
    if (req.url == "/") {
        res.end("This is your Home page");
    } else if(req.url == "/about") {
        res.end("This is your About page");
    }
    else if(req.url == "/contact") {
        res.end("This is your contact page");
    }
    else if(req.url == "/userapi"){
        
            // To read data from the testjson.json
            // console.log(data); // This will display the result in the terminal
            // res.end(data); // This will display the result on the client's screen
            res.writeHead(200, {"content-type" : "application/json"});
            res.end(objData[0].username);
        
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"});
        res.end("<h1> Error 404 page not found </h1>");
    }
    
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening on port 8000");
})