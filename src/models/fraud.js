const mongoose = require("mongoose")



const form = new mongoose.Schema({
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
    fraudType: {
        type: String,
        required: true
    },
    FraudsterName: {
        type: String,
        required: true
    },
    FraudsterMobile: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, { timestamps: true })
module.exports = mongoose.model("Fraud", fraud);