// mailerRoutes.js
const express = require('express');
const router = express.Router();
const mailerController = require('./mailerController');

router.post('/send-email', mailerController.sendContactFormEmail);

module.exports = router;
