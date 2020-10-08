const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 4,
        maxlength: 25,
        required: [true, "It is polite to introduce yourself, what's your name?"]
    },
    lastName: {
        type: String,
        minlength: 4,
        maxlength: 25,
    },
    email: {
        type: String,
        minlength: 8,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: [true, "Email is already in use."],
        required: [true, "Email is required for password reset"]
    },
    userName: {
        type: String,
        minlength: 6,
        maxlength: 25,
        unique: [true, "Someones using requested User Name"],
        required: [true, "Username required to Login"]
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, "Account must be secured"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Post
    }],
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;