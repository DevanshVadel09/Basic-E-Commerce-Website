const asyncHandler  = require("express-async-handler");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

// ====================Register User============================

// @desc Register a user
// @route POST /api/user/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password: ", hashedPassword);
    const user = await User.create({
        username, 
        email, 
        password : hashedPassword
    });

    console.log(`User created ${user}`);
   if (user) {
    res.status(201).json({
        _id: user.id,
        email: user.email
    });
    } else {
    res.status(400);
    throw new Error("User data is not valid");
    }
}); 

// ==================Login User====================================

// @desc login a user
// @route POST /api/user/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("All filed are madatory!")
    }
 const normalizedEmail = email.toLowerCase();
const user = await User.findOne({email: normalizedEmail});

 if (!user) {
        console.log("User not found");
    } else {
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);
    }
// compare password with hashed password
if(user && (await bcrypt.compare(password, user.password))){
    const accessToken = jwt.sign(
        {
            user: {
            username: user.username,
            email: user.email,
            id : user.id
        }},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "15m"}
    );
    res.status(200).json({accessToken});
}else{
    res.status(401);
    throw new Error("Email or Password is not valid")
}
});

// ==================Current User========================================

// @desc current a user
// @route POST /api/user/current
// @access Public

const currentUser = asyncHandler(async (req, res) => {
 res.json(req.user)
});

//========================================================================

module.exports = { registerUser, loginUser, currentUser };
