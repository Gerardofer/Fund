const mongoose = require("mongoose");
const { Schema } = mongoose;

const CharitySchema = new Schema({
  Password: {
    type: String
  },
  Email: {
    type: String
  },
  CharityName: {
    type: String
  },
  PurchaseOrder: {
    type: Array,
    default: []
  },
  Char_eth_Address: {
    type: String,
    default: ""
  },
  CharityInfo: {
    Address: {
      type: String
    },
    City: {
      type: String
    },
    State: {
      type: String
    },
    ZipCode: {
      type: Number
    },
    PhoneNumber: {
      type: Number
    }
  }
});

mongoose.model("Charity", CharitySchema);
