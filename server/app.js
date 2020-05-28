const express = require('express');
const serverless = require('serverless-http');
// const emailRouter = require('./sendEmail');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var AWS = require('aws-sdk');
const SESConfig = {
  apiVersion: '2010-12-21',
  accessKeyId: 'AKIAJHITOGVY7KYIHTQQ',
  secretAccessKey: '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',
  region: 'us-east-2'
}

app.get('/ping', (req, res) => {
  res.send({message: 'Ping!!! Pong!!!!'});
});

app.post('/test', (req, res) => {
  res.send({message: req.body});
});

app.post('/sendEmail', (req, res) => {
  // const data = req.body;
  var params = {
    Destination: {
      ToAddresses: ['indoorsale0@gmail.com'],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: '<h1>Hello</h1>'
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email',
      },
    },
    Source: 'indoorsale0@gmail.com' /* required */,
  };

  var sendPromise = new AWS.SES(SESConfig)
    .sendEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function (data) {
      console.log('success');
    })
    .catch(function (err) {
      console.error(err);
    });
});

app.listen(3000, () => console.log('server running port 3000'));
// module.exports.handler = serverless(app);
