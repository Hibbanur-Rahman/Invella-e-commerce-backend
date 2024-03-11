const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    billingAddress: {
      type: mongoose.Types.ObjectId,
      ref: "billingAddress",
    },
    shippingAddress:{
      type: mongoose.Types.ObjectId,
      ref:'shippingAddress'
    },
    cart:[{
      type: mongoose.Types.ObjectId,
      ref:'cart'
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
