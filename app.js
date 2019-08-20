var express = require('express');
var bodyparser = require("body-parser");
var bkrouter = require("./routes/bookrouter");
var authrouter = require("./routes/authrouter");
var userrouter = require("./routes/userrouter");
var newbookrouter = require("./routes/newbookrouter");
var mongoose = require('mongoose');
var muser = require('./model/user');

var url = "mongodb://localhost/library"

const app =express();
//var app = new express();
const chalk = require('chalk');
const path = require('path');

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err) throw err
    else{
        console.log("db connected");
    }
})

app.set("view engine","ejs");
app.set("views","./src/views");

app.listen(8976,function(req,res){
    console.log("server started"+chalk.red('8976'));
});
app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({extended:true}));

app.use("/books",bkrouter);
app.use("/authors",authrouter);
app.use("/user",userrouter);
app.use("/nwbk",newbookrouter);

app.get("/",function(req,res){
    res.render("login");
});

app.get("/index",function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{
        ptitle:"Library",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/nwbk",title:"New Book"}]
    });
});

