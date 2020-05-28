'use strict';

const router = express.Router();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'indoorsale0@gmail.com',
    pass: 'Suchi@1992',
  },
});

router.post('/sendEmail', (req, res) => {
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
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(response),
      });
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    }
  });
});

module.exports = router;
