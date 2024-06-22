const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    subtitle: {
        type: String
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    description: {
        type: String
    },
})

module.exports = mongoose.model('Project', dataSchema)