var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Notebook = mongoose.model('Notebook');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
router.get('/API/notebooks/', function(req, res, next) {
  Notebook.find(function(err, notebooks) {
    if (err) { return next(err); }
    res.json(notebooks);
  });
});

// add a notebook
router.post('/API/notebooks/', function (req, res, next) {
  let notebook = new Notebook(req.body);
  notebook.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
}); 

// get a notebook
router.get('/API/notebook/:notebook', function(req, res) {
  req.notebook.populate('notes', function(err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

// delete a notebook
router.delete('/API/notebook/:notebook', function(req, res, next) {
  req.notebook.remove(function(err) {
    if (err) { return next(err); }   
    res.json(req.recipe);
    });
})

// add a note to notebook
router.post('/API/notebook/:notebook/notes', function(req, res, next) {
    req.notebook.notes.push(req.body);
    req.notebook.save(function(err, rec) {
      if (err) return next(err);
      res.json(req.body);
    });
});