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
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      Donor.findOne({ googleId: profile.id }).then(existingDonor => {
        if (existingDonor) {
          //no need to create a new record
          done(null, existingDonor);
        } else {
          new Donor({ googleId: profile.id })
            .save()
            .then(Donor => done(null, Donor));
        }
      });
    }
  )
);
