// Dependencies
//var restful = require('node-restful');
var mongoose = require('mongoose');

// Schema   
var schoolSchema = new mongoose.Schema({
    title: String,
    landLineNumber: Number,
    MobileNumber: Number,
    email:String
} ,{ collection: 'schoolInfo' });

var School = mongoose.model('schoolInfo',schoolSchema);

// get all the users
School.find({}, function(err, schoolinfo) {
  
  if (err) throw err;

  // object of all the users
  console.log(schoolinfo);
});
// Return model
module.exports = School;