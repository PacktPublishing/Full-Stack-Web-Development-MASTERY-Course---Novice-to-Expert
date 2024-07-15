const mongoose = require("mongoose");

// when working with remote server then add these 2 parameteres as well { useCreateIndex: true, useFindAndModify: true }
mongoose.connect("mongodb://localhost:27017/fullstackdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection successful!")).catch((err) => console.log(err));

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: true,
        // lowercase: true
        uppercase: true,
        trim: true,
        minlength: 2,
        maxlength: 30

    },
    type: {
        type: String,
        enum: ["frontend", "backend", "database"]
    },
    lec: {
        type: Number,
        validate(value){
            if(value < 0) {
                throw new Error("The number of lectures can not be in negative range");
            }
        }
    }, 
    published: Boolean,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const model = new mongoose.model("model", schema);

const createDocument = async ()=>{
    try{
        

        // const cssSchema = new model({
        //     name: "CsS",
        //     type: "frontend",
        //     lec: 3,
        //     published: true,
        //     author: "Prerak Mehta"
        // });

        // const jsSchema = new model({
        //     name: "JavaScript",
        //     type: "frontend",
        //     lec: 25,
        //     published: true,
        //     author: "Prerak Mehta"
        // });

        const javaSchema = new model({
            name: "java",
            type: "backend",
            lec: 25,
            published: true,
            author: "Prerak Mehta"
        });
       

        
        
        const result = await model.insertMany([javaSchema]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

createDocument();

const getDocument = async()=>{
    try{
        // $gt used for greater than
        // const result = await model.find({lec: {$gt: 50}}).select({name: 1})//.limit(1);

        // $gte used for greater than or equal to
        // const result = await model.find({lec: {$gte: 50}}).select({name: 1})//.limit(1);

        // $lt used for less than
        // const result = await model.find({lec: {$lt: 50}}).select({name: 1})//.limit(1);

        // $lte used for less than or equal to
        // const result = await model.find({lec: {$lte: 50}}).select({name: 1})//.limit(1);
        
        // $in Matches any of the values specified in an array.
        // const result = await model.find({type: {$in: ["frontend", "backend"]}}).select({name: 1})//.limit(1);

        // $nin Matches none of the values specified in an array.
        // const result = await model.find({type: {$nin: ["frontend", "backend"]}}).select({name: 1})//.limit(1);

        // $or if either of conditions are matched then that document will be displayed
        // const result = await model.find({$or: [{type: "database"}, {author: "Prerak Mehta"}]}).select({name: 1})//.limit(1);

        // $and if both the conditions are matched then that document will be displayed
        // const result = await model.find({$and: [{type: "database"}, {author: "Prerak Mehta"}]}).select({name: 1})//.limit(1);
        
        // Query Methods
        
        // when you want to count no of documents
        // const result = await model.find({$or: [{type: "database"}, {author: "Prerak Mehta"}]}).select({name: 1}).countDocuments();//.limit(1);

        // when you want to sort data in ascending order
        // const result = await model.find({$or: [{type: "database"}, {author: "Prerak Mehta"}]}).select({name: 1}).sort({name: 1});//.limit(1);

        // when you want to sort data in descending order
        const result = await model.find({$or: [{type: "database"}, {author: "Prerak Mehta"}]}).select({name: 1}).sort({name: -1});//.limit(1);

        console.log(result);
    }
    catch(err){
        console.log(err);
    }
    
}

// getDocument();

const updateDocument = async(_id)=>{
    try{
        const result = await model.findByIdAndUpdate({_id}, {
            $set: {
                name: "javascript ES6 2022"
            }
        }, {new: true, useFindAndModify: false})
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// updateDocument("625d864a9af219eceef21829");

const deleteDocument = async(_id)=>{
    try{
        const result = await model.findByIdAndDelete({_id});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// deleteDocument("625d864a9af219eceef21828");