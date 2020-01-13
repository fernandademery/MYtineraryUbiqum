const mongoose = require("mongoose");

const childSchema = mongoose.Schema({
    title: String,
    description: String,
    img: Array
});

const itinerarySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    _id: {
        type: String
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    tag: {
        type: Array,
        required: false
    },
    activities: [childSchema]
});


module.exports = mongoose.model("itinerary", itinerarySchema);