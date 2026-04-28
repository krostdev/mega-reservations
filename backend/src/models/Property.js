const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ["hotel", "apartment", "guesthouse"],
        required: true
    },

    address: {
        type: {
            street: String,
            city: String,
            state: String,
            country: String,
            zipCode: String,
        },

        required: true
    },

    description: {
        type: String,
        required: true
    },
    amenities: [String],

    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Property", propertySchema)