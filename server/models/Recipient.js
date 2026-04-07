const mongoose = require('mongoose');

const recipientSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bloodGroup: { type: String, required: true },
  requiredOrgan: { type: String, required: true },
  severity: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Recipient', recipientSchema);
