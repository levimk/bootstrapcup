const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  firstName: String,
  lastName: String,
  twitterHandle: String,
  indiehackersHandle: String
})

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;