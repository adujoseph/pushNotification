
var admin = require("firebase-admin");

var serviceAccount = require('./fastcreditapp-2ce57-firebase-adminsdk-cg9du-7f26838acf.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://sample-project-e1a84.firebaseio.com"
});

module.exports.admin = admin
