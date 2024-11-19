const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        max: 50
    },
    desc: {
        type: String,
        max: 50
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    }
}, {timestamps: true});

module.exports = mongoose.model("Post", postSchema);