const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  twitterHandle: String,
  indiehackersHandle: String
})