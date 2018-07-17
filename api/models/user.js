const { Schema, mongoose } = require('./db')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const User = new Schema({
//  user_id: Number, ID will be automatically generated
    profile_pic: Text,
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
    images: Text = {}, // Michael dosent know what the {} do.
});

User.plugin(passportLocalMongoose, {
    usernameField: 'email'
})

module.exports = mongoose.model('User', User);