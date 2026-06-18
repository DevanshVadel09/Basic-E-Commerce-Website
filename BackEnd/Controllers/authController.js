const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signup = async(req,res)=>{

try{

const {
username,
email,
phone,
password
}=req.body;


const exists =
await User.findOne({email});


if(exists){
return res.status(400).json({
message:"User already exists"
});
}


const hashPassword =
await bcrypt.hash(password,10);


const user = await User.create({

username,
email,
phone,
password:hashPassword

});


res.status(201).json({
message:"Account created"
});


}
catch(error){

res.status(500).json({
message:error.message
});

}

};





const login = async(req,res)=>{


try{


const {
email,
password
}=req.body;



const user =
await User.findOne({email});


if(!user){

return res.status(404).json({
message:"User not found"
});

}



const match =
await bcrypt.compare(
password,
user.password
);



if(!match){

return res.status(400).json({
message:"Wrong password"
});

}



const token = jwt.sign(
    {
        id:user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"1d"
    }
);



res.json({

message:"Login success",
token

});



}
catch(error){

res.status(500).json({
message:error.message
});

}

};


module.exports={
signup,
login
};