const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    name:{
      type:String,
      require:true,
    },
    email: {
      type: String,
      require:true,
      unique:true,
    },
    gender:{
      type:String,
      require:true
    },
    password: {
      type: String,
      require:true,
    }, 
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });
  
 const UserModal = mongoose.model("User", userScheme);

module.exports = UserModal;
