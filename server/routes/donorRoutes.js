const express = require('express');
const router = express.Router();
const { getDonors, registerDonor } = require('../controllers/donorController');

router.route('/').get(getDonors).post(registerDonor);

module.exports = router;
