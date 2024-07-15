const mongoose = require("mongoose");

// when working with remote server then add these 2 parameteres as well { useCreateIndex: true, useFindAndModify: true }
mongoose.connect("mongodb://localhost:27017/fullstackdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection successful!")).catch((err) => console.log(err));

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: String,
    lec: Number,
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
        const htmlSchema = new model({
            name: "html",
            type: "frontend",
            lec: 30,
            published: true,
            author: "Prerak Mehta"
        });
        
        const result = await htmlSchema.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

createDocument();