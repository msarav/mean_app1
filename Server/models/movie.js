
//Connects mongodb 
var mongoose = require('mongoose');

//Declare Schema
var movieSchema = new mongoose.Schema({

  title:{
    type:String,
    require:true,
  },
  url:{
    type:String,
    required:true
  }
});

//Export the model schema..
module.exports = movieSchema;
