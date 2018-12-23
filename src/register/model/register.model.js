const mongoose = require('mongoose');
const { Schema } = mongoose;

const register = new Schema({
    name: { type: String },
    last_name: { type: String },
    mail: { type: String },
    phone: { type: Number }
});
module.exports = mongoose.model('users', register);