//logic to decide dev or prod env.
if (process.env.NODE_ENV === "production") {
  //we are in production
  module.exports = require("./prod");
} else {
  //we are in dev
  module.exports = require("./dev");
}
