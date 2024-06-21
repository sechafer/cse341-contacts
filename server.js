
const express = require('express');

const mongodb = require('./data/database');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.use('/', require('./routes'));

mongodb.intDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port, () => { console.warn(`Database is listening and Node is running on port ${port}`); });
  }
});