const express = require('express');
const mongoose = require('mongoose'); // new
const bodyParser = require('body-parser');
const apiRouter = require('./api');

// Connect to MongoDB database
mongoose
  .connect('mongodb://localhost:27017/scrap', {useNewUrlParser: true})
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use('/api', apiRouter);
    app.listen(5000, () => {
      console.log('Server has started!');
    });
  })
  .catch((err) => {
    console.log('Error connecting Mongodb', JSON.stringify(err));
  });
