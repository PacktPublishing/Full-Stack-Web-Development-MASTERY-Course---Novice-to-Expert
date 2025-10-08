const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register an account or SignUp
router.get("/", (req,res) => {
    res.send("Hey its auth Route");
})

router.post("/register", async (req,res) => {
    try{
        // To generate new hashed Passwords
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // store the account credentials in the User schema
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // saves the data and serves a response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        console.log(err);
    }
})


// Login
router.post("/login", async(req,res) => {
    
    try{
        // check if user enters correct email or not
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User not found");

        // check if user enters correct password or not
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong Password");

        // If both password and email are correct
        res.status(200).json(user);
    } catch(err){
        console.log(err);
    }
})

module.exports = router