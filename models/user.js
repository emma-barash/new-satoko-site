const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);