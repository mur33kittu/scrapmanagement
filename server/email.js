const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '',
  },
});

router.post('/sendEmail', function (req, res) {
  // const dat = JSON.parse(JSON.stringify(req.body));
  // console.log(JSON.parse(Object.keys(req.body)[0]));
  const data = JSON.parse(Object.keys(req.body)[0]);
  
  const mailoptions = {
    from: 'indoorsale0@gmail.com',
    to: 'indoorsale0@gmail.com,' + data.email,
    subject: 'Scrap Quote from ' + data.firstName + ' ' + data.lastName,
    html:
      '<table><tr><td>First Name:' +
      data.firstName +
      '</td></tr>' +
      '<tr><td>Last Name:' +
      data.lastName +
      '</td></tr>' +
      '<tr><td>Phone: ' +
      data.phone +
      '</td></tr>' +
      '<tr><td>Business Name: ' +
      data.businessName +
      '</td></tr>' +
      '<tr><td>Email: ' +
      data.email +
      '</td></tr>' +
      '<tr><td>Whatisit: ' +
      data.whatisit +
      '</td></tr>' +
      '<tr><td>Materials: ' +
      data.materials +
      '</td></tr>' +
      '<tr><td>weight: ' +
      data.weight +
      '</td></tr>' +
      '<tr><td>contaminants: ' +
      data.contaminants +
      '</td></tr>',
  };
  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('error sending email. please try again');
    } else {
      res.status(200).send('email sent');
    }
  });
});

module.exports = router;
