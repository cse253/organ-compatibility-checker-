const Recipient = require('../models/Recipient');

// @desc    Get all recipients
// @route   GET /api/recipients
// @access  Public (for now)
const getRecipients = async (req, res) => {
  try {
    const recipients = await Recipient.find({});
    res.status(200).json(recipients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Register a new recipient
// @route   POST /api/recipients
// @access  Public (for now)
const registerRecipient = async (req, res) => {
  try {
    const { name, age, bloodGroup, requiredOrgan, severity } = req.body;
    const recipient = await Recipient.create({ name, age, bloodGroup, requiredOrgan, severity });
    res.status(201).json(recipient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getRecipients,
  registerRecipient,
};
