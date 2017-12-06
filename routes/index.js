var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Notebook = mongoose.model('Notebook');
let jwt = require('express-jwt');

let auth = jwt({secret: process.env.NOTEBOOK_BACKEND_SECRET, userProperty: 'payload'});

module.exports = router;

router.param('notebook', function(req, res, next, id) {
  let query = Notebook.findById(id);
  query.exec(function (err, nb){
    if (err) { return next(err); }
    if (!nb) { return next(new Error('not found ' + id)); }
    req.notebook = nb;
    return next();
  });
}); 

// get all notebooks
/*router.get('/API/notebooks/', auth, function(req, res, next) {
  Notebook.find(function(err, notebooks) {
    if (err) { return next(err); }
    res.json(notebooks);
  });
});*/

// get a notebook
router.get('/API/notebook/:notebook', auth, function(req, res) {
  req.notebook.populate('notes', function(err, nb) {
    if (err) return next(err);
    res.json(nb);
  });
});

// add a note to notebook
router.post('/API/notebook/:notebook/notes/add', auth, function(req, res, next) {
    req.notebook.notes.push(req.body);
    req.notebook.save(function(err, nb) {
      if (err) return next(err);
      res.json(req.body);
    });
});

// delete a note from notebook
router.post('/API/notebook/:notebook/notes/delete/:noteid', function(req, res, next) {
  const notebook = req.notebook;
  notebook.notes = notebook.notes.filter(function(note){
    console.log(note._id);
    return note._id != req.params.noteid;
  })
  notebook.save( function (err) {
    if (err) return next(err);
    res.json(notebook);
  })
})

// delete all notes from notebook
router.post('/API/notebook/:notebook/notes/delete/', function(req, res, next) {
  const notebook = req.notebook;
  notebook.notes = [];
  notebook.save( function (err) {
    if (err) return next(err);
    res.json(notebook);
  })
})