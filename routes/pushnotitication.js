const express = require('express');
const { pushNotification } = require('../controllers/sendPushController');
const router = express.Router();

router.post('/pushnotification', pushNotification);

module.exports = router;