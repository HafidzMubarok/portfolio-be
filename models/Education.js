const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    institution: {
        required: true,
        type: String
    },
    qualification: {
        type: String
    },
    start_date: {
        required: true,
        type: Date
    },
    end_date: {
        type: Date
    },
    description: {
        type: String
    },
})

module.exports = mongoose.model('Education', dataSchema)