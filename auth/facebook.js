/*const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const models = require('../db/models/index');

passport.use(new FacebookStrategy({
    clientID: KEY,
    clientSecret: SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));*/

/*passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
*/


