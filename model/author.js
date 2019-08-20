var mongoose = require('mongoose');
var schema = mongoose.Schema;
var authschema = new schema({
    authid:{type:String,required:true},       
    authname:{type:String,required:true},
    authgenre:String,      
    authimage:{type:String,required:true}    
});

var authmodel = mongoose.model("author",authschema,"authors");
module.exports = authmodel;