var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
  var Schema = mongoose.Schema;

  var employeeSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    age: Number,
    email:   String,
    
  });


  var employees = mongoose.model('blogs', employeeSchema);
  module.exports=employees;
  //var employeedata=new employees({name:'rakesh',age:42,email:'rakesh@gmail.com'});
  /*db.on("connected",function (){
  console.log("connected successfully");
  });


  db.on("disconnected",function (){
    console.log("disconnected successfully");
    });

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function(err,res) {
    /*employeedata.save(function(){
      if(err) throw err;
      console.log(res);
      db.close();
    })
    employees.findOne({},function(err,data){
      if(err) throw err;
      console.log(data);
      db.close();
    })  

    /*employees.findOneAndUpdate({name:'rakesh'},{email:'prabha@gmail.com'},function(err,res){
      if(err) throw err;
      console.log(res);
      db.close();
    })


  });*/

  //console.log(employeedata);  