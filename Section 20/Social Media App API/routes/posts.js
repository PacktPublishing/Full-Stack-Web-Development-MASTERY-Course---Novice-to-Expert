const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// create a post
router.post("/", async (req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json(err);
    }
})

// update a post
router.put("/:id", async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("Post has been updated");
        } else{
            res.status(403).json("You can update your post only");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})

// delete a post
router.delete("/:id", async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post has been deleted");
        } else{
            res.status(403).json("You can delete your post only");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})


// Like or unlike a post
router.put("/:id/like", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("Post has been liked");
        } else {
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("Post has been unliked");
        }
    } catch(err){
        res.status(500).json(err);
    }
})

// fetch timeline posts
router.get("/timeline/all", async (req,res) => {
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendposts = await Promise.all(currentUser.following.map((friendId) => {
            return Post.find({userId: friendId});
        }));
        res.status(200).json(userPosts.concat(friendposts));
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;