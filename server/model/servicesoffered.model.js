const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServicesOfferedSchema = new Schema({
  type: {
    type: 'String',
    required: true,
  },
  properties: {
    type: [],
    required: true,
  },
  geometry: {
    type: [],
    required: true,
  },
});

module.exports = ServicesOfferedSchema;
