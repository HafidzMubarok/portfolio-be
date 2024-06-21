const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    company: {
        required: true,
        type: String
    },
    position: {
        required: true,
        type: String
    },
    entry_date: {
        required: true,
        type: Date
    },
    out_date: {
        required: true,
        type: Date
    },
    description: {
        type: String
    },
})

module.exports = mongoose.model('WorkHistory', dataSchema)