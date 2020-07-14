var express = require('express');
var emp_model = require('../mdata.js');
var router = express.Router();
router.use(express.static('public'));
/* GET home page. */

var employee = emp_model.find({})

router.get('/', function(req, res, next) {
  employee.exec(function(err,data){
    if(err) throw err;
    res.render('index', { title: 'Employee Records',records:data});
  })
  
});


router.get('/edit/:id', function(req, res, next) {
  var id=req.params.id;
  var edit=emp_model.findById(id);
  edit.exec(function(err,data){
    if(err) throw err;
    //console.log(data);
    res.render('edit', { title: 'Employee Edit Records',records:data});
  })
  
});


router.post('/update/', function(req, res, next) {
 
  var update=emp_model.findByIdAndUpdate(req.body.id,{
      name:req.body.name,
      age:req.body.age,
      email:req.body.email,      
  });
console.log(req.body.name);
  update.exec(function(err){
    if(err) throw err;
    res.redirect("/");
  })
  
});


router.get('/delete/:id', function(req, res, next) {
  var id=req.params.id;
  var del=emp_model.findByIdAndDelete(id);
  del.exec(function(err,data){
    if(err) throw err;
    res.redirect("/");
  })
  
});


 

router.post('/', function(req, res, next) {
  var empdetails=new emp_model({
    name:req.body.name,
    age:req.body.age,
    email:req.body.email,  
    });

  empdetails.save();
  employee.exec(function(err,data){
    if(err) throw err;
    res.redirect("/");
  })
  
});


router.get('/users/:Id', function(req, res, next) {
  //res.render('users', { });
  console.log(req.params);
  res.send("Data Send");
});

module.exports = router;
