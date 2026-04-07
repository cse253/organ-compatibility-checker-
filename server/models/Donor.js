const mongoose = require('mongoose');

const donorSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bloodGroup: { type: String, required: true },
  organ: { type: String, required: true },
  healthStatus: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Donor', donorSchema);
