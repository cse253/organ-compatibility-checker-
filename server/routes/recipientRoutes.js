const express = require('express');
const router = express.Router();
const { getRecipients, registerRecipient } = require('../controllers/recipientController');

router.route('/').get(getRecipients).post(registerRecipient);

module.exports = router;
