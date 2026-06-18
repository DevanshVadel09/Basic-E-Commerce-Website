const mongoos = require("mongoose")
const userShema = mongoos.Schema({
    username: {
        type: String,
        required: {true:"UserName is required"},
        unique: {true: "Username already exists"},
    },
    email: {
        type: String,
        required: {true: "Email is required"},
        unique: {true: "Email already exists"},
    },

    password: {
        type: String,
        required: {true:"Password is required"},
        unique: {true: "Password already exists"},
    },
       phone:{
        type:String,
        required: {true:"Phone is required"},
         unique: {true: "Phone already exists"},
    },

},
{
    timestamps: true,
}
);

module.exports = mongoos.model("User", userShema);