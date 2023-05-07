
var admin = require("firebase-admin");

var serviceAccount = require('./fastcreditmobile-firebase-adminsdk-ku8z6-af035234f0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://sample-project-e1a84.firebaseio.com"
});

module.exports.admin = admin
