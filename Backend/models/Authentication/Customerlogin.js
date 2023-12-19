
const mongoose = require('mongoose');


const userLoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserLogin = mongoose.model('UserLogin', userLoginSchema);

module.exports = UserLogin;
