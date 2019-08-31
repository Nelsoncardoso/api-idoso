"use strict";

//we import passport packages required for authentication
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//
//We will need the models folder to check passport agains
var db = require("../models");
//
// Telling passport we want to use a Local Strategy. In other words,
//we want login with a username/email and password
passport.use(new LocalStrategy(
// Our user will sign in using an email, rather than a "username"
{
  usernameField: "email"
}, function (email, password, done) {
  // When a user tries to sign in this code runs
  db.Profissional.findOne({
    where: {
      email: email
    }
  }).then(function (dbProfissional) {
    // If there's no Profissional with the given email
    if (!dbProfissional) {
      return done(null, false, {
        message: "Incorrect email."
      });
    }
    // If there is a Profissional with the given email, but the password the Profissional gives us is incorrect
    else if (!dbProfissional.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
    // If none of the above, return the Profissional
    return done(null, dbProfissional);
  });
}));
//
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (profissional, cb) {
  cb(null, profissional);
});
//
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
//
// Exporting our configured passport
module.exports = passport;