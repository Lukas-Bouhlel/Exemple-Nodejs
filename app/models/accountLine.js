const mongoose = require('mongoose');

const accountLineSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AccountLine', accountLineSchema);
