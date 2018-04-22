const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const Donor = mongoose.model("Donor");

passport.serializeUser((donor, done) => {
  done(null, donor.id);
});

passport.deserializeUser((id, done) => {
  Donor.findById(id).then(donor => {
    done(null, donor);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingDonor = await Donor.findOne({ googleId: profile.id });

      if (existingDonor) {
        return done(null, existingDonor);
      }

      const Donor = await new Donor({ googleId: profile.id }).save();
      done(null, Donor);
    }
  )
);
