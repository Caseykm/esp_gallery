const express = require('express');

const app = express();
const port = process.env.PORT || 9001;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Okay website is done let us kindly fuck off' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));