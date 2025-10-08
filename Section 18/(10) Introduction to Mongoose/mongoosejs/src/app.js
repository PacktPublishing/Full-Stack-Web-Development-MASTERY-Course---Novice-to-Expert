const mongoose = require("mongoose");

// when working with remote server then add these 2 parameteres as well { useCreateIndex: true, useFindAndModify: true }
mongoose.connect("mongodb://localhost:27017/fullstackdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection successful!")).catch((err) => console.log(err));