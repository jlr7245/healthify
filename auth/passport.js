const passport = require('passport');
const models = require('../db/models/index');

//Serialize user--> a process whereby we take the user info in the
//form of a a json object and turn it into a format the computer
// can store in a session in memory.
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });


//Deserialization --> is when the user data is plucked out of the session
//memory and concerted to something like a json object so the app can
// do something with the data. e.g. get the user;s email or first name
  passport.deserializeUser((id, done) => {
    models.User.findById(id)
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  });
};
