const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    professional_motto: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    whatsapp: {
        required: true,
        type: String
    },
    linkedin: {
        type: String
    },
    github: {
        type: String
    },
    instagram: {
        type: String
    },
    x: {
        type: String
    },
    about_me: {
        type: String
    },
})

module.exports = mongoose.model('Profile', dataSchema)