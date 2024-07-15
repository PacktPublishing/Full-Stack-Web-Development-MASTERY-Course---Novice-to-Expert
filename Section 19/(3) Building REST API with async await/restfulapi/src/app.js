const express = require("express");
require("./db/connection");
const student = require("./model/students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/students", async (req, res)=>{

    try{

        const user = new student(req.body);

        const createUser = await user.save();

        res.status(201).send(createUser);

    }catch(err){
       res.status(400).send(err);
    }

    
    // console.log(req.body);

    // const user = new student(req.body);

    // user.save().then(()=>{
    //     res.status(201).send(user);
    // }).catch((err)=>{
    //     res.status(400).send(err);
    // })
    
    // res.send("Hello from the server side");
})

app.listen(port, ()=>{
    console.log(`Connection is set up at ${port}`);
})