const User = require('../models').user;

exports.index = function(req, res, next) {
 try {
  return User
  .findOne({ where: { id: req.session.passport.user } })
  .then( (user) => {
    res.render('index', { 
      title: 'Chronicle',
      user: user.dataValues,
      message: req.flash('success')
    })
  })
  }
  catch {
    res.render('index', {
      title: 'Chronicle'
    })
  }
};


