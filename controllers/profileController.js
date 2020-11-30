const UserModel = require('../models/UserModel');

exports.index = function(req, res) {
  console.log('profileController.index');
  res.send('PROFILE PAGE');
}