const { response } = require("express");
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

// This method reads or GET all the data from students collection
app.get("/students", async (req, res)=> {
    try{
        const getData = await student.find();
        res.send(getData);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// This method reads or GET specific data from studentes collection
app.get("/students/:id", async (req,res)=> {
    try{
        const _id = req.params.id;
        const specificData = await student.findById(_id);
        console.log(specificData);

        if (!specificData) {
            res.status(404).send();
        } else {
            res.send(specificData);
        }

    }catch(err){
        res.send(err);
    }
})

// This method will update some fields in your specific document
app.patch("/students/:id", async (req, res)=> {
    try{

        const _id = req.params.id;
        const updateStudent = await student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateStudent);


    }catch(err){
        res.status(500).send(err);
    }
})


app.listen(port, ()=>{
    console.log(`Connection is set up at ${port}`);
})