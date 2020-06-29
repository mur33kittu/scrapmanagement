const PinCodeSchema = require('../../model/pincode.model');
const mongoose = require('mongoose');
const router = require('express').Router();

const PinCode = mongoose.model('pincode', PinCodeSchema);

router.get('/', async (req, res) => {
  await PinCode.find()
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
