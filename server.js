const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 9001;
const app = express();

// db config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

// API calls
app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));