const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3001;
const email = require('./email');
const router = express.Router();

router.get('/ping', function (req, res) {
  res.send('Hello there !!!');
});
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

app.use('/email', email);
app.listen(port, () => console.log('app listening in port ' + port));
