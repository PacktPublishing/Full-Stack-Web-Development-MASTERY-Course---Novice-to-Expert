const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req,res)=>{
    // fs.readFile("input.txt", "utf-8", (err,data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })
    // const readableStream = fs.createReadStream("input.txt");
    // readableStream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // });

    // readableStream.on('end', ()=>{
    //     res.end();
    // })

    // readableStream.on("error", ()=>{
    //     console.log(error);
    //     res.end("File not found");
    // })

    // performing the same streaming of data but now with the help of pipe()
    const readableStream = fs.createReadStream("input.txt");
    readableStream.pipe(res);

});

server.listen(8000, "127.0.0.1");