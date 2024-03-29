const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
//keys
const keys = require('../config/keys');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  }).catch(err => {
    done(err, null);
  })
});

GoogleStrategy.passReqToCallback = true;
passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    }, 
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId: profile.id})
      .then(existingUser => {
        if(existingUser) {
          done(null, existingUser)
        }
        else {
          new User({googleId: profile.id})
          .save()
          .then(user => done(null, user))
        }
      })
    })
  );