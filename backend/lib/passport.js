const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/User');

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) =>  {
    Users.findById(_id, done);
  });

  passport.use('localSignin', new LocalStrategy({
    usernameField : 'userID',
    passwordField : 'password',
    passReqToCallback : true,
    
  },async (req, userID, password, done) => {
    try {
      const user = await Users.findOne({userID: userID});
      console.log(user);
      
      if (user && await user.validatePassword(password)) {
        return done(null, user);
      }
      else{
        return done(null, false);
      } 
     
    } catch(err) {
      done(err);
    }
  }));
  
  
};
