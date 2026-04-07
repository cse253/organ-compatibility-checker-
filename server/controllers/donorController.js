const Donor = require('../models/Donor');

// @desc    Get all donors
// @route   GET /api/donors
// @access  Public (for now)
const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find({});
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Register a new donor
// @route   POST /api/donors
// @access  Public (for now)
const registerDonor = async (req, res) => {
  try {
    const { name, age, bloodGroup, organ, healthStatus } = req.body;
    const donor = await Donor.create({ name, age, bloodGroup, organ, healthStatus });
    res.status(201).json(donor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDonors,
  registerDonor,
};
