const ServicesOfferedSchema = require('../../model/servicesoffered.model');
const mongoose = require('mongoose');
const router = require('express').Router();

const ServicesOffered = mongoose.model(
  'services_offered',
  ServicesOfferedSchema
);

router.get('/', async (req, res) => {
  await ServicesOffered.find()
    .then((res) => {
      res.status(200).send(res);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
