
const dotenv = require('dotenv').config();
var serverKey = process.env.SERVER_KEY;
const { admin } = require('../firebase');
// var fcm = new FCM(serverKey);
// var FCM = require('fcm-node');

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};



const firebaseAdmin = async (req, res) => {
    const { token, title, body } = req.body;
    
    if (!token) {
        res.status(400).json({
            success: false,
            data: null,
            error: 'FCM token is missing',
        });
        return
    }
    if (!title) {
        res.status(400).json({
            success: false,
            data: null,
            error: 'Title of message is missing',
        });
        return
    }

    if (!body) {
        res.status(400).json({
            success: false,
            data: null,
            error: 'Body of your message is missing',
        });
        return
    }

    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        // to: token,
        // collapse_key: 'your_collapse_key',
        notification: {
            title,
            body
        },
    };

    try {
        admin.messaging().sendToDevice(token, message, notification_options)
            .then(response => {
                res.status(200).json({
                    success: false,
                    data: response,
                    error: null,
                });
            })
            .catch(error => {
                res.status(400).json({
                    success: false,
                    data: null,
                    error: error,
                });
            });
    } catch (err) {
        res.status(400).json({
            success: false,
            data: null,
            error: err,
        });
    }



};

module.exports = { firebaseAdmin };