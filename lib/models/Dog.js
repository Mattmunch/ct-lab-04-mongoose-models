const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  breed: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
})
;
module.exports = mongoose.model('Dog', schema);
