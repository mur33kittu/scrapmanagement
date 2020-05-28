
use this later.
 <div className="form-group row">
              <label htmlFor="contaminants" className="col-form-label  col-sm-12">
                Upload Photos Of Your Scrap (Up To 10 Images)
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  className="custom-file-input"
                  id="validatedInputGroupCustomFile"
                  required
                />
                <label
                  className="custom-file-label col-sm-12"
                  htmlFor="validatedInputGroupCustomFile"
                >
                  Choose file...
                </label>
              </div>
            </div>


            {
  "firstName": "Lokesh",
  "lastName": "Guruswamy",
  "phone": "+1 8602168580",
  "businessName": "Scrap Anything",
  "email": "mur33kittu@gmail.com",
  "whatisit": "car",
  "materials": "iron",
  "weight": "200kg",
  "contaminants": "NA"
}

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
          Data: <h1>Hello</h1>,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email',
      },
    },
    Source: 'indoorsale0@gmail.com' /* required */,
  };

  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'})
    .sendEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function (data) {
      console.log(data.MessageId);
    })
    .catch(function (err) {
      console.error(err, err.stack);
    });
});

