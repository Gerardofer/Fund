const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String
  }
  // PurchaseOrders: {
  //   type: Array,
  //   default: []
  // },
  // Don_eth_address: {
  //   type: String,
  //   default: ""
  // }
});

mongoose.model("users", userSchema);
