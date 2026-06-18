const mongoose = require('mongoose');

const connectSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    username: {
        type: String,
        required: [true, "Please add a contact username"],
        unique: {true: "Contact username already exists"}
    },
    email: {
        type: String,
        required : [true, "Please add a contact email"],
        unique: {true: "Contact email already exists"}
    },
    phone: {
        type: String,
        required : [true, "Please add a contact phone"],
        unique: {true: "Contact phone already exists"}
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Contact", connectSchema);