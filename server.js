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
app.get("/", (req, res) => {
  res.send({ express: "You shouldn't be seeing this" });
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
