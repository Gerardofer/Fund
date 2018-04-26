const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/donation", requireLogin, async (req, res) => {
    const donation = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Funding for charity",
      source: req.body.id
    });
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
