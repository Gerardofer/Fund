const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const Donor = mongoose.model("Donor");

passport.serializeUser((user, done) => {
  done(null, donor.id);
});

passport.deserializeUser((id, done) => {
  Donor.findById(id).then(user => {
    done(null, user);
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
      console.log(accessToken);
      console.log(profile);
      const existingDonor = await Donor.findOne({ googleId: profile.id });

      if (existingDonor) {
        return done(null, existingDonor);
      }

      const donor = await new Donor({ googleId: profile.id }).save();
      done(null, donor);
    }
  )
);
