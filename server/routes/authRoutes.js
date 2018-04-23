const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/projects");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.donors);
  });

  app.get("/api/current_donor", (req, res) => {
    res.send(req.donors);
  });
};
