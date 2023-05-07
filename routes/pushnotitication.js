const express = require('express');
const { pushNotification } = require('../controllers/sendPushController');
const {firebaseAdmin} = require('../controllers/firebaseAdminController');
const router = express.Router();

router.post('/pushnotification', pushNotification);
router.post('/firebase-admin', firebaseAdmin);

module.exports = router;