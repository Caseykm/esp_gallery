const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../models/user");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      // create new user
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.getSalt(10, (err, salt) => {
        // Generate a salt - gives an error if there is one
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err; // Checks for error
          newUser.password = hash; // Sets new user to the hash
          newUser
            .save()
            .then(user => res.json(user)) // Gives us user that is created - read .json to send back a successful response with that user.
            .catch(err => console.log(err)); // .catch in case something goes wrong
        });
      });
    }
  });
});

module.exports = router;
