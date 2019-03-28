const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Data Schema
const DataSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
});

module.exports = Data = mongoose.model('data', DataSchema)