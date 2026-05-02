const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,

        required: true,
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    role: {
        type: String,
        enum: ["guest", "admin"],
        default: "guest"
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema)