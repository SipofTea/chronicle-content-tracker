const user = require('../models').user;
module.exports = { 
  sign_up (req, res) {
  res.render('users/new', { 
    title: 'Sign Up'
  })
  },

  add (req, res) {
  return user
    .create({
      user_name: req.body.username,
      email: req.body.email,
      encrypted_password: req.body.password
    })
    .then(() => res.redirect("/"))
    .catch((error) => res.status(400).send(error));
  },
};
