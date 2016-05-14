var express = require('express');
var Student = require('../model/student');
var router = express.Router();

router.post('/', function(req, res){

  var student = new Student ({
    student_id : req.body.student_id,
    name       : req.body.name,
    ic_number  : req.body.ic_number,
    year_join  : req.body.year_join
  });

  student.save(function(err, data){
    if(err){
      console.err("Error saving student data")
    }else{
      console.log("Student is saved. " + data)
      res.redirect('/students')
    };
  });

});

router.get('/new', function(req, res, next) {
  res.render("students/new", {})
});

router.get('/', function(req,res))

module.exports = router;
