const mongoose = require("mongoose");
const bcrypt= require('bcrypt');


const UserSchema = new mongoose.Schema(
  {
    username:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports=mongoose.model("User",UserSchema);