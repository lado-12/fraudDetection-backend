const mongoose = require("mongoose")



const fraud = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
transactionAmount: {
        type: Number,
        required: true
    },
    fraudsterMobile: {
        type: Number,
        required: true
    },
    userBehaviour: {
        type: String,
        required: true
    }

}, { timestamps: true })
module.exports = mongoose.model("Fraud", fraud);