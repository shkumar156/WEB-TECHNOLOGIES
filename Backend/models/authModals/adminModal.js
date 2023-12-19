const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    email: {
      type: String,
      require:true,
      unique:true,
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
  
 const AdminModal = mongoose.model("Admin", adminSchema);

module.exports = AdminModal;
