const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 9001;
const users = require("./api/routes/users");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Body parser middleware - allows us to access requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB locked and loaded"))
  .catch(err => console.log(err));

// API calls
app.get('/', function(req, res){
  res.render('App.js', { root: __dirname + "/client/src" } );
});

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/routes/users", users);



if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));


// cloudinary

var express = require('express');
var mustacheExpress = require('mustache-express');
var path = require('path');
var app = express();

// Middleware
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.use('/public', express.static('public'));

// Routes
app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(1337, function() {
  console.log('Running on port 1337');
});