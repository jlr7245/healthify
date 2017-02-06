//healthify
const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');


router.get('/register', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/registration', {title: 'register', currentRoute: 'auth'});
});


router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/foods');
    });
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });

});

//this route provides a page to log in
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login', {title: 'login', currentRoute: 'auth'});
});

//this check if the user is already logged in
router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

//this logs-out the user and then redirects the user to the homepage.
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
