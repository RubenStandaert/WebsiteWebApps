var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');
let Notebook = mongoose.model('Notebook');
let passport = require('passport');

module.exports = router;

router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
      return res.status(400).json(
        {message: 'Please fill out all fields'});
  }

  var notebook = new Notebook();
  
  notebook.save(function(err, nb) {
    if (err){ return next(err); }
  });

  var user = new User();
  user.username = req.body.username;
  user.notebookID = notebook._id;
  user.setPassword(req.body.password)
  user.save(function (err){
      if(err){ return next(err); }
      return res.json({token: user.generateJWT(), notebookID: notebook._id})
  });
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
      return res.status(400).json(
        {message: 'Please fill out all fields'});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }
    if(user){
      return res.json({token: user.generateJWT(), notebookID: user.notebookID});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/checkusername', function(req, res, next) {
    User.find({username: req.body.username}, function(err, result) {
      if (result.length) {
        res.json({'username': 'alreadyexists'})
      } else {
        res.json({'username': 'ok'})
      }
    });
});

router.get('', function(req, res, next) {
  User.find(function(err, users) {
    if (err) { return next(err); }
    res.json(users);
  });
});





