const request = require('request');

export const sendEmail = (content) => {
  request.post(
    'http://localhost:3001/email/sendEmail',
    {
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      json: content,
    },
    (error, res) => {
      console.log(error, res);
    }
  );
};
