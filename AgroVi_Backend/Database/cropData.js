const mongoose = require('mongoose')


const cropData = mongoose.Schema({
    crop_name: {
        type: String,
        required: true
    },
    crop_details: {
        type: String,
        required: true
    },
    time_of_seeding: {
        type: String,
        required: true
    },
    time_of_harvesting: {
        type: String,
        required: true
    },
    soil_component: {
        pH: {
            type: String,
            required: true
        },
        nitrogen: {
            type: String,
            required: true
        },
        phosphorus: {
            type: String,
            required: true
        },
        potassium: {
            type: String,
            required: true
        },
        organic_matter: {
            type: String,
            required: true
        }
    },
    air_conditions: {
        type: String,
        required: true
    },
    weather: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("crop", cropData);