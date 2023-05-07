var FCM = require('fcm-node');
const dotenv = require('dotenv').config();
var serverKey = process.env.SERVER_KEY; //put your server key here
var fcm = new FCM(serverKey);

const pushNotification = async (req, res) => {
    const { token } = req.body;
    if (!token) {
        res.status(400).json({
            success: false,
            data: null,
            error: 'FCM token is missing',
        });
        return
    }

    try {
        var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
            to: token,
            // collapse_key: 'your_collapse_key',

            notification: {
                title: 'Title of your push notification',
                body: 'Body of your push notification'
            },
        };

        fcm.send(message, function (err, response) {
            if (err) {
                res.status(400).json({
                    success: false,
                    data: null,
                    error: err,
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: response,
                    error: null,
                });
            }
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            data: null,
            error: 'Something is wrong',
        });
    }



};

module.exports = { pushNotification };