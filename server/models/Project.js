const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  image: { type: String },
  location: { type: String },
  completedDate: { type: Date },
  featured: { type: Boolean, default: false }
});

module.exports = mongoose.model('Project', projectSchema);
