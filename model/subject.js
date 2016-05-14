var mongoose = require('mongoose');

var subjectSchema = new mongoose.Schema({
  name        : String,
  description : String
});

module.exports =  mongoose.model('Subject', subjectSchema);