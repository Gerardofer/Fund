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
    res.send(req.donor);
  });

  app.get("/api/current_donor", (req, res) => {
    console.log("Here I am!!!");
    console.log(req.donors);
    res.send(req.donor);
  });
};
