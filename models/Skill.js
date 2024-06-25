const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    icon: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Skill', dataSchema)