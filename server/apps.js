const express = require('express');
const serverless = require('serverless-http');
// const emailRouter = require('./sendEmail');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// var ses = new aws.SES();

// var AWS = require('aws-sdk');
// const SESConfig = {
//   apiVersion: '2010-12-21',
//   accessKeyId: 'AKIAIGX366V7CV3K5HUQ',
//   secretAccessKey: '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',
//   region: 'us-east-2',
// };

app.get('/ping', (req, res) => {
  res.send({message: 'Ping!!! Pong!!!!'});
});

app.post('/test', (req, res) => {
  res.send({message: req.body});
});


// app.listen(3000, () => console.log('server running port 3000'));
module.exports.handler = serverless(app);
