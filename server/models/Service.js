const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  icon: { type: String },
  image: { type: String },
  category: { type: String },
  order: { type: Number }
});

module.exports = mongoose.model('Service', serviceSchema);
