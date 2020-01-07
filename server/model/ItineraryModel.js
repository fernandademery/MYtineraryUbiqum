const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
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
    activities: {
        type: Array,
        required: true
    }
});


module.exports = mongoose.model("itinerary", itinerarySchema);