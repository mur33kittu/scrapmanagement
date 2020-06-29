const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PinCodeSchema = new Schema({
  items: {
    type: [],
    required: true,
  },
});

module.exports = PinCodeSchema;
