const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageUrl: String
});

module.exports = mongoose.model('Image', imageSchema);