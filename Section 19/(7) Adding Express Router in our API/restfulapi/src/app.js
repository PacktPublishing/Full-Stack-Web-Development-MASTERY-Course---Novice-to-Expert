const { response } = require("express");
const express = require("express");
require("./db/connection");
const student = require("./model/students");
const studentRouter = require("./routers/routing");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);



app.listen(port, ()=>{
    console.log(`Connection is set up at ${port}`);
})