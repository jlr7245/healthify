const bcrypt = require('bcryptjs');
const models = require('../db/models/index');


//uses bcrypt to compare passwords
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

// this will redirect a logged in user to their user profile
// page if they're already loggin in
function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user');
  return next();
}

// allows users to register
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.User.create({
    username: req.body.username,
    password: hash,
    email: req.body.email,
    fullName: req.body.fullName,
    isNew: 'yes'
  });
}

//will redirect users that aren't logged in.
function loginRequired(req, res, next) {
  if (!req.user) res.redirect('/auth/login');

  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}
