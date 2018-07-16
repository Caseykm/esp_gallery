const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    user_id: Number,
    profile_pic: text,
    username: String,
    email: String,
    password: String,
    first_name: String,
    last_name: String,
    address: String,
    suburb: String,
    postcode: Number,
    stripe_id: String,
    admin: Boolean,
    user_description: String,
    images: Text = {},
});

User.plugin(passportLocalMongoose, {
    usernameField: 'email'
})

module.exports = mongoose.model('User', User);