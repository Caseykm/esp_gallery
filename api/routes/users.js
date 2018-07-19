const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../models/user");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// router.post("/register", (req, res) => res.json({ msg: "Register Works" }));

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
      bcrypt.genSalt(10, (err, salt) => {
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

// Accept a user's email, validate that email and then validate
// @route   GET api/routes/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password; // Password coming through here is plain text - needs to be hashed

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      // T/F value check
      if (isMatch) {
        // If match - gen token
        res.json({ msg: "Success" });
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
