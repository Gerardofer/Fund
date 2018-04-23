const mongoose = require("mongoose");
const { Schema } = mongoose;

const DonorSchema = new Schema({
  googleId: {
    type: String
  },
  PurchaseOrders: {
    type: Array,
    default: []
  },
  Don_eth_address: {
    type: String,
    default: ""
  }
});

mongoose.model("Donor", DonorSchema);
