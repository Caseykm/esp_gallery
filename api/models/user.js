const { Schema, mongoose } = require("./db");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  //  user_id: Number, ID will be automatically generated
  profile_pic: String,
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
  images: String
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = User = mongoose.model("users", UserSchema);
