const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,

    }
},
    { timestamps: true });
const User = mongoose.model('User', userSchema);
module.exports = User;
