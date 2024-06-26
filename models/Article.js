const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    tags: {
        type: [String]
    },
    created_at: {
        required: true,
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Article', dataSchema)