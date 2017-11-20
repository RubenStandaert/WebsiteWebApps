var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    name : String,
    description : String,
    position : String,
    techniqueType : String,
    counter : Number
});	

var NotebookSchema = new mongoose.Schema({
    notes: [NoteSchema]
});	
mongoose.model('Notebook', NotebookSchema);