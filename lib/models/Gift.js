const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Gift', schema);
